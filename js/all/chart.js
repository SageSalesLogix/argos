/**
* Soho XI Controls v4.2.1-rc.1 
* Date: 21/09/2016 2:20:36 PM 
* Revision: dca25746ab00034dc8aa98db05b015602a0c2159 
 */ 

/**
* Chart Controls
* @name Charts
* TODO:

  Make vertical bar chart (have horizontal)
  Work on update functions or routine
  Make responsive
  Make Area/Dot Chart
  Test With Screen readers
*/

window.Chart = function(container) {
  'use strict';

  var charts = this;

  //IE8 and Below Message
  if (typeof d3 === 'undefined') {
    $(container).append('<p class="chart-message"></p>');
    return null;
  }

  var colorRange = ['#1D5F8A', '#8ED1C6', '#8E72A4', '#5C5C5C', '#F2BC41', '#76B051', '#AD4242',
   '#8DC9E6', '#DE7223', '#317C73', '#EB9D9D', '#999999', '#44831F', '#C7B4DB',
   '#4EA0D1', '#6C4B81', '#AFDC91', '#69ADA3', '#DE7223', '#D8D8D8'];

  this.isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  this.pieColors = d3.scale.ordinal().range(colorRange);
  this.greyColors = d3.scale.ordinal().range(['#737373', '#999999', '#bdbdbd', '#d8d8d8']);
  this.sparklineColors = d3.scale.ordinal().range(['#1D5F8A', '#999999', '#bdbdbd', '#d8d8d8']);
  this.colors = d3.scale.ordinal().range(colorRange);

  this.chartColor = function(i, chartType, data) {
    var specColor = (data && data.color ? data.color : null);

    //error, alert, alertYellow, good, neutral or hex
    if (specColor) {
      if (specColor ==='error' ) {
        return '#e84f4f';
      }
      if (specColor ==='alert' ) {
        return '#ff9426';
      }
      if (specColor ==='alertYellow' ) {
        return '#ffd726';
      }
      if (specColor ==='good' ) {
        return '#80ce4d';
      }
      if (specColor ==='neutral' ) {
        return '#dbdbdb';
      }
      if (specColor && specColor.indexOf('#') === 0) {
        return data.color;
      }
    }

    if (chartType === 'pie') {
      return this.pieColors(i);
    }
    if (chartType === 'bar-single' || chartType === 'column-single') {
      return '#368AC0';
    }
    if (chartType === 'bar' || chartType === 'line') {
      return this.colors(i);
    }
  };

  // Help Function to Select from legend click
  this.selectElem = function (line, series) {
    var idx = $(line).index(),
      elem = series[idx],
      s = charts.settings,
      selector;

    if (s.chartType === 'Pie') {
      selector = d3.select(s.svg.selectAll('.arc')[0][idx]);
    }
    else if (s.type === 'column-positive-negative') {
      if (!elem.option || (elem.option && elem.option === 'target')) {
        return;
      }
      selector = s.svg.select('.bar.'+ elem.option);
    }
    else if (['Column', 'HorizontalBar'].indexOf(s.chartType) !== -1) {
      // Grouped or singlular
      if (s.isGrouped || s.isSingular) {
        selector = s.svg.select('.series-'+ idx);
      }
      // Stacked
      else if (s.isStacked && !s.isSingular) {
        var thisGroup = d3.select(s.svg.selectAll(s.chartType==='HorizontalBar' ? '.series-group' : '.g')[0][idx]);
        selector = thisGroup.select('.bar');
      }
    }

    if (['Pie', 'Column', 'HorizontalBar'].indexOf(s.chartType) !== -1) {
      s.isByLegends = true;
      selector.on('click').call(selector.node(), selector.datum(), idx);
    }

    if (elem.selectionObj) {
      charts.selectElement(d3.select(elem.selectionObj[0][idx]), elem.selectionInverse, elem.data);
    }
  };

  this.addLegend = function(series) {
    var i, s = charts.settings,
      legend = $('<div class="chart-legend"></div>');

    if (series.length === 0) {
      return;
    }

    // Legend width
    var width = 0,
      currentWidth,
      widthPercent;

    for (i = 0; i < series.length; i++) {
      currentWidth = series[i].name.length * 6;
      width = (series[i].name && currentWidth > width) ? currentWidth : width;
    }

    width += 55;
    widthPercent = width / $(container).width() * 100;

    for (i = 0; i < series.length; i++) {
      if (!series[i].name) {
        continue;
      }

      var extraClass = '';
      if (series[i].display && (series[i].display === 'block' || series[i].display === 'twocolumn')) {
        extraClass += ' lg';
      }
      if (s.type === 'column-positive-negative' && series[i].option) {
        extraClass += ' '+ series[i].option;
      }

      var seriesLine = $('<span class="chart-legend-item'+ extraClass +'" tabindex="0"></span>'),
        hexColor = charts.chartColor(i, (series.length === 1 ? 'bar-single' : 'bar'), series[i]);

      var color = $('<span class="chart-legend-color"></span>').css('background-color', (series[i].pattern ? 'transparent' : hexColor)),
        textBlock = $('<span class="chart-legend-item-text">'+ series[i].name + '</span>');

      if (series[i].pattern) {
        color.append('<svg width="12" height="12"><rect style="fill: '+ hexColor +'" mask="url(#'+ series[i].pattern +')" height="12" width="12" /></svg>');
      }

      if (series[i].percent) {
        var pct = $('<span class="chart-legend-percent"></span>').text(series[i].percent);
        textBlock.append(pct);
      }

      if (series[i].display && series[i].display==='block') {
        seriesLine.css({'float':'none', 'display':'block', 'margin':'0 auto', 'width':width});
      }

      if (series[i].display && series[i].display==='twocolumn') {
        legend.css({'margin':'2em auto auto', 'border-top':'1px solid #ccc', 'padding-top':'1em'});
        if(widthPercent > 45) {
          seriesLine.css({'float':'none', 'display':'block', 'margin':'0 auto', 'width':width});
        } else {
          seriesLine.css({'float':'none', 'display':'inline-block', 'width': '45%'});
        }
      }

      seriesLine.append(color, textBlock);
      legend.append(seriesLine);
    }

    legend.on('click.chart', '.chart-legend-item', function () {
        charts.selectElem(this, series);
      }).on('keypress.chart', '.chart-legend-item', function (e) {
        if (e.which === 13 || e.which === 32) {
          charts.selectElem(this, series);
        }
      });

    $(container).append(legend);
  };

  this.renderLegend = function() {
    if (charts.legendformatter && typeof charts.legendformatter === 'function') {
      var markup = '';
      var runInterval = true,
      legendInterval = setInterval(function () {
        if(runInterval) {
          runInterval = false;
          charts.legendformatter(function (data) {
            markup = data;
          });
        }
        if(markup !== '') {
          clearInterval(legendInterval);
          $(container).append(markup);
        }
      }, 10);
    }
  };

  //Add Toolbar to the page
  this.appendTooltip = function() {
    this.tooltip = $('#svg-tooltip');
    if (this.tooltip.length === 0) {
      this.tooltip = $('<div id="svg-tooltip" class="tooltip right is-hidden"><div class="arrow"></div><div class="tooltip-content"><p><b>32</b> Element</p></div></div>').appendTo('body');
      if (this.isTouch) {
        this.tooltip.css({'pointer-events':'auto'}).on('touchend.svgtooltip', function () {
          charts.hideTooltip();
        });
      }
    }
  };

  this.triggerContextMenu = function(elem, d) {
    d3.event.preventDefault();
    d3.event.stopPropagation();
    d3.event.stopImmediatePropagation();

    var e = $.Event('contextmenu');
    e.target = elem;
    e.pageX = d3.event.pageX;
    e.pageY = d3.event.pageY;
    $(container).trigger(e, [elem, d]);
  };

  //Show Tooltip
  this.showTooltip = function(x, y, content, arrow) {
    //Simple Collision of left side
    if (x < 0) {
      x = 2;
    }

    this.tooltip.css({'left': x + 'px', 'top': y + 'px'})
      .find('.tooltip-content').html(content);

    this.tooltip.removeClass('bottom top left right').addClass(arrow);
    this.tooltip.removeClass('is-hidden');
  };

  this.getTooltipSize = function(content) {
    this.tooltip.find('.tooltip-content').html(content);
    return {height: this.tooltip.outerHeight(), width: this.tooltip.outerWidth()};
  };

  //Hide Tooltip
  this.hideTooltip = function() {
    d3.select('#svg-tooltip').classed('is-hidden', true).style('left', '-999px');
  };

  //Format Currency
  this.formatCurrency = function(num) {
    var symbol = (Locale.currentLocale.data ? Locale.currentLocale.data.currencySign : '$');
    num = (isNaN(num * 1)) ? 0 : num;
    return symbol + (num * 1).toFixed(2);
  };

  this.HorizontalBar = function(chartData, isNormalized, isStacked) {
    //Original http://jsfiddle.net/datashaman/rBfy5/2/

    var defaults = {
      // Use d3 Format
      // http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html
      // [null | formatter string] - Only value will be formated
      formatterString: null,
    },
    settings = $.extend(true, defaults, charts.options),
    isFormatter = !!settings.formatterString,
    format = function (value) {
      return isFormatter ? d3.format(settings.formatterString)(value) : value;
    };

    var dataset, maxTextWidth, width, height, series, rects, svg, stack, xMin, xMax,
        xScale, yScale, yAxis, yMap, xAxis, groups, isGrouped, isSingle, legendMap,
        gindex, totalBarsInGroup, totalGroupArea, totalHeight, gap, barHeight;

    var tooltipInterval,
      tooltipDataCache = [],
      tooltipData = charts.options.tooltip;

    var maxBarHeight = 30,
      legendHeight = 40,
      gapBetweenGroups = 0.5; // As of one bar height (barHeight * 0.5)

    isStacked = isStacked === undefined ? true : isStacked;

    var isViewSmall = $(container).parent().width() < 450;

    var margins = {
      top: isStacked ? 30 : 20,
      left: 30,
      right: 30,
      bottom: 30 // 30px plus size of the bottom axis (20)
    };

    dataset = chartData;
    $(container).addClass('chart-vertical-bar');

    width =  parseInt($(container).parent().width()) - margins.left - margins.right;
    height =  parseInt($(container).parent().height()) - margins.top - margins.bottom - legendHeight;  //influences the bar width

    //Get the Legend Series'
    series = dataset.map(function (d) {
      return {name: d.name, color: d.color, pattern: d.pattern};
    });

    //Map the Data Sets and Stack them.
    dataset = dataset.map(function (d) {
      return d.data.map(function (o) {
        return $.extend({}, o, {
            y: o.value,
            x: o.name,
            color: o.color,
            pattern: o.pattern
        });
      });
    });
    stack = d3.layout.stack();
    stack(dataset);

    //Calculate max text width
    maxTextWidth = 0;
    dataset = dataset.map(function (group, i) {
      if (!isStacked) {
        if (series[i]) {
          maxTextWidth = (series[i].name.length > maxTextWidth ? series[i].name.length : maxTextWidth);
        }
      }
      return group.map(function (d) {
        if(isStacked) {
          maxTextWidth = (d.x.length > maxTextWidth ? d.x.length : maxTextWidth);
        }

        // Invert the x and y values, and y0 becomes x0
        return $.extend({}, d, {
            x: d.y,
            y: d.x,
            x0: d.y0,
            color: d.color,
            pattern: d.pattern
        });

      });
    });

    var h = parseInt($(container).parent().height()) - margins.bottom - (isStacked ? 0 : (legendHeight / 2)),
      w = parseInt($(container).parent().width()) - margins.left,
      textWidth = margins.left + (maxTextWidth * 6);

    svg = d3.select(container)
      .append('svg')
      .attr('width',  w)
      .attr('height', h)
      .append('g')
      .attr('class', 'group')
      .attr('transform', 'translate(' + (textWidth) + ',' + margins.top + ')');

    xMin = d3.min(dataset, function (group) {
      return d3.min(group, function (d) {
          return isStacked ? (d.x + d.x0) : d.x;
      });
    });

    xMax = d3.max(dataset, function (group) {
      return d3.max(group, function (d) {
          return isStacked ? (d.x + d.x0) : d.x;
      });
    });

    if (isStacked && isNormalized) {
      var gMax = [];
      //get the max for each array group
      dataset.forEach(function(d) {
        d.forEach(function(d, i) {
        gMax[i] = (gMax[i] === undefined ? 0 : gMax[i]) + d.x;
       });
      });

      //Normalize Each Group
      dataset.forEach(function(d) {
        d.forEach(function(d, i) {
          var xDif = gMax[i]/100;
          d.x = d.x / xDif;
          d.x0 = d.x0 / xDif;
       });
      });
      xMax = 100;
    }

    //Width of the bar minus the margin
    var barWith = w - textWidth - margins.left;

    xScale = d3.scale.linear()
      .domain([(xMin < 0 ? xMin : 0), xMax])
      .nice()
      .range([0, barWith]).nice();

    if (isStacked) {
      yMap = dataset[0].map(function (d) {
        return d.y;
      });

      barHeight = 0.32;
    } else {
      yMap = series.map(function (d) {
        return d.name;
      });

      (function() {
        var i, l, lm;
        // Loop backwards to catch and override with found first custom info from top
        for (i = dataset.length-1,l = -1; i > l; i--) {
          lm = dataset[i].map(function (d) {
            return d;
          });
          $.extend(true, legendMap, lm);
          // Convert back to array from object
          legendMap = $.map(legendMap, function(d) {
            return d;
          });
        }
      })();

      gindex = 0;
      totalBarsInGroup = legendMap.length;
      totalGroupArea = height / yMap.length;
      barHeight = totalGroupArea / totalBarsInGroup;
      totalHeight = totalBarsInGroup > 1 ?
        totalGroupArea - (barHeight * gapBetweenGroups) : maxBarHeight;
      gap = totalGroupArea - totalHeight;
      maxBarHeight = totalHeight / totalBarsInGroup;
      barHeight = 0;
    }

    yScale = d3.scale.ordinal()
      .domain(yMap)
      .rangeRoundBands([0, height], barHeight, barHeight);

    xAxis = d3.svg.axis()
      .scale(xScale)
      .tickSize(-height)
      .orient('middle');

    if (isViewSmall) {
      xAxis.ticks(textWidth < 100 ? 5 : 3);
    }

    if (isStacked && isNormalized) {
      xAxis.tickFormat(function(d) { return d + '%'; });
    }

    yAxis = d3.svg.axis()
      .scale(yScale)
      .tickSize(0)
      .orient('left');

    svg.append('g')
      .attr('class', 'axis x')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis y')
      .call(yAxis);

    groups = svg.selectAll('g.group')
      .data(dataset)
      .enter()
      .append('g')
      .attr('class', 'series-group')
      .attr('data-group-id', function (d, i) {
        return i;
      });

    isGrouped = (svg.selectAll('.series-group')[0].length > 1 && !isStacked);
    isSingle = (svg.selectAll('.series-group')[0].length === 1 && isStacked);

    $.extend(charts.settings, {
      svg: svg,
      chartType: 'HorizontalBar',
      isSingle: isSingle,
      isGrouped: isGrouped,
      isStacked: isStacked
    });

    rects = groups.selectAll('rect')
      .data(function (d, i) {
        d.forEach(function(d) {
          d.index = i;

          if(!isStacked) {
            d.gindex = gindex++;
          }

        });
        return d;
    })
    .enter()
    .append('rect')
    .attr('class', function(d, i) {
      return 'bar series-'+ i;
    })
    .style('fill', function(d, i) {
      return isStacked ?
        (series.length === 1 ? (charts.chartColor(i, 'bar-single', d)) :
          (charts.chartColor(d.index, 'bar', series[d.index]))) :
        (charts.chartColor(i, 'bar', legendMap[i]));
    })
    .attr('mask', function (d, i) {
      if (dataset.length === 1 && dataset[0][i].pattern) {
        return 'url(#'+ dataset[0][i].pattern +')';
      }
      else if (isStacked && series[d.index].pattern) {
        return 'url(#'+ series[d.index].pattern +')';
      }
      else if (!isStacked && legendMap[i].pattern) {
        return 'url(#'+ legendMap[i].pattern +')';
      }
    })
    .attr('x', function (d) {
      return (isStacked && !isSingle) ? xScale(d.x0) : xScale(0);
    })
    .attr('y', function (d) {
      return isStacked ? yScale(d.y) :
        ((((totalGroupArea - totalHeight) / 2) + (d.gindex * maxBarHeight)) + (d.index * gap));
    })
    .attr('height', function () {
      return isStacked ? (yScale.rangeBand()) : maxBarHeight;
    })
    .attr('width', 0) //Animated in later
    .on('mouseenter', function (d, i) {
      var j, l, hexColor,
        total = 0,
        totals = [],
        content = '',
        data = d3.select(this.parentNode).datum(),
        mid = Math.round(data.length/2),
        shape = d3.select(this),
        setPattern = function(pattern, hexColor) {
          return !pattern || !hexColor ? '' :
            '<svg width="12" height="12">'+
              '<rect style="fill: '+ hexColor +'" mask="url(#'+ pattern +')" height="12" width="12" />'+
            '</svg>';
        },

        show = function(xPosS, yPosS, isTooltipBottom) {
          var size = charts.getTooltipSize(content),
            x = xPosS+(parseFloat(shape.attr('width'))/2)-(size.width/2),
            y = isTooltipBottom ? yPosS : (yPosS-size.height-13);

          if(content !== '') {
            charts.showTooltip(x, y, content, isTooltipBottom ? 'bottom' : 'top');
          }
        };

       if (dataset.length === 1) {
          content = '<p><b>'+ d.y +' </b>'+ d.x +'</p>';
        }
        else {
          content = '<div class="chart-swatch">';

          if(isStacked) {
            for (j=0,l=dataset.length; j<l; j++) {
              total = 0;
              hexColor = charts.chartColor(j, 'bar', series[j]);
              for (var k=0,kl=dataset.length; k<kl; k++) {
                total += dataset[k][i].x;
                totals[k] = dataset[k][i].x;
              }
              content += ''+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (series[j].pattern ? 'transparent' : hexColor) +';">'+
                    setPattern(series[j].pattern, hexColor)+
                  '</div>'+
                  '<span>'+ series[j].name +'</span><b> '+ Math.round((totals[j]/total)*100) +'% </b>'+
                '</div>';
            }

          }
          else {
            if(mid > 1) {
              shape = d3.select(this.parentNode).select('.series-' + mid);
            }
            for (j=0,l=data.length; j<l; j++) {
              hexColor = charts.chartColor(j, 'bar', legendMap[j]);
              content += ''+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (legendMap[j].pattern ? 'transparent' : hexColor) +';">'+
                    setPattern(legendMap[j].pattern, hexColor)+
                  '</div>'+
                  '<span>'+ data[j].name +'</span><b>'+ format(data[j].value) +'</b>'+
                '</div>';
            }
          }
          content += '</div>';
        }

        if (total > 0) {
          content = '<span class="chart-tooltip-total"><b>' + total + '</b> '+Locale.translate('Total')+'</span>' +content;
        }

        var yPosS = shape[0][0].getBoundingClientRect().top + $(window).scrollTop(),
            xPosS = shape[0][0].getBoundingClientRect().left + $(window).scrollLeft();

        var maxBarsForTopTooltip = 6,
          isTooltipBottom = (!isStacked && (data.length > maxBarsForTopTooltip));

        if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCache[i]) {
          content = '';
            var runInterval = true;
            tooltipInterval = setInterval(function() {
              if (runInterval) {
                runInterval = false;
                tooltipData(function (data) {
                  content = tooltipDataCache[i] = data;
                });
              }
              if (content !== '') {
                clearInterval(tooltipInterval);
                show(xPosS, yPosS, isTooltipBottom);
              }
            }, 10);
          } else {
            content = tooltipDataCache[i] || tooltipData || d.tooltip || content || '';
            show(xPosS, yPosS, isTooltipBottom);
          }
    })
    .on('mouseleave', function () {
      clearInterval(tooltipInterval);
      charts.hideTooltip();
    })
    .on('click', function (d, i) {
      var isSelected = this && d3.select(this).classed('is-selected'),
        thisGroupId = parseInt(d3.select(this.parentNode).attr('data-group-id'), 10);

      charts.setSelectedElement({
        task: (isSelected ? 'unselected' : 'selected'),
        container: container,
        selector: this,
        isTrigger: !isSelected,
        triggerGroup: isGrouped,
        d: d,
        i: i
      });

      if (isSelected) {
        $(container).triggerHandler('selected', [d3.select(this)[0], {}, (isGrouped ? thisGroupId : i)]);
      }
      return;
    });

    //Adjust the labels
    svg.selectAll('.axis.y text').attr({'x': -15});

    //Animate the Bars In
    svg.selectAll('.bar')
      .transition().duration(1000)
      .attr('width', function (d) {
        return Math.abs(xScale(d.x) - xScale(0));
      })
      .attr('x', function (d) {
        return (isStacked && !isSingle) ? xScale(d.x0) : (d.x < 0 ? xScale(d.x) : xScale(0));
      });

    //Add Legends
    charts.addLegend(isStacked ? series : legendMap);
    charts.appendTooltip();

    // Set initial selected
    (function () {
      var selected = 0,
        legendsNode = svg.node().parentNode.nextSibling,
        legends = d3.select(legendsNode),
        isLegends = legends.node() && legends.classed('chart-legend'),
        barIndex, selector, isStackedGroup,

        setSelectedBar = function (g) {
          g = g ? d3.select(g) : svg;
          g.selectAll('.bar').each(function(d, i) {
            if (!d) {
              return;
            }
            if (d.selected && selected < 1) {
              selected++;
              selector = d3.select(this);
              barIndex = i;
            }
          });
        },

        setSelectedGroup = function () {
          var groups = svg.selectAll('.series-group');
          if (groups[0].length) {
            groups.each(function() {
              setSelectedBar(this);
            });
          }
        };

      if (isGrouped || (isStacked && !isSingle)) {
        chartData.forEach(function(d, i) {
          if (d.selected && selected < 1) {
            selected++;
            selector = svg.select('[data-group-id="'+ i +'"]').select('.bar');
            barIndex = i;
            if (isStacked && !isGrouped) {
              isStackedGroup = true;
            }
          }
        });
        if (selected < 1) {
          setSelectedGroup();
        }
      }
      else {
        setSelectedBar();
      }

      if (selected > 0) {
        if (isStackedGroup) {
          if (isLegends) {
            $(legends.selectAll('.chart-legend-item')[0][barIndex]).trigger('click.chart');
          }
        }
        else {
          selector.on('click').call(selector.node(), selector.datum(), barIndex);
        }
      }

    })();

    $(container).trigger('rendered');
    return $(container);
  };


  this.Pie = function(initialData, isDonut, options) {
    var defaults = {
      labels: {
        // true|false
        hideLabels: true,
        isTwoline: true,

        // 'name'|'value'|'percentage'|'name, value'|'name (value)'|'name (percentage)'
        contentsTop: 'percentage',
        contentsBottom: 'name',

        // Use d3 Format
        // http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html
        // [null | formatter string] - Only value will be formated
        formatterTop: null,
        formatterBottom: null,

        // 'default'|'color-as-arc'|'#000000'|'black'
        colorTop: 'color-as-arc',
        colorBottom: 'default',
        lineColor: 'default',
        lineWidth: 2,
        linehideWhenMoreThanPercentage: 10
      }
    },
    settings = $.extend(true, defaults, options),
    lb = settings.labels;

    if (!lb.isTwoline && options && !options.labels.colorTop) {
      lb.colorTop = lb.colorBottom;
    }

    var self = this,
      parent = $(container).parent();

    var tooltipInterval,
      tooltipDataCache = [],
      tooltipData = charts.options.tooltip;

    charts.appendTooltip();

    var legendshow = charts.legendshow || false;

    var chartData = initialData[0].data;
    chartData = chartData.sort(function(a,b) {
      return +a.value - +b.value;
    });

    var total = d3.sum(chartData, function(d){ return d.value; });

    chartData = chartData.map(function (d) {
      return { data: d, elm: d, name: d.name, color: d.color, value: d.value, percent:d3.round(100*(d.value/total)) };
    });

    var svg = d3.select(container).append('svg'),
      arcs = svg.append('g').attr('class','arcs'),
      lines = svg.append('g').attr('class','lines'),
      centerLabel = initialData[0].centerLabel;

    $(container).addClass('chart-pie');

    var pie = d3.layout.pie().value(function (d) {
      return d.value;
    });
    // .sort(null);

    // Store our chart dimensions
    var dims = {
      height: parseInt(parent.height()),  //header + 20 px padding
      width: parseInt(parent.width()),
      widgetheight: 318
    };
    var isSmall = (dims.width < 405);
    dims.height = dims.height > dims.widgetheight ? dims.widgetheight : dims.height;
    dims.height = isSmall && !lb.hideLabels ? dims.width : dims.height;

    dims.outerRadius = ((Math.min(dims.width, dims.height) / 2) - 35);
    dims.innerRadius = isDonut ? dims.outerRadius - (!lb.hideLabels ? 50 : 30) : 0;
    dims.labelRadius = dims.outerRadius + 20;
    dims.center = { x: dims.width / 2, y: dims.height / 2 };

    svg.attr({
      'width': '100%',
      'height': ((isSmall && !lb.hideLabels) || dims.height === dims.widgetheight) ? dims.height - 50 : '100%',
      'viewBox': '0 0 ' + dims.width + ' ' + dims.height
    });

    // move the origin of the group's coordinate space to the center of the SVG element
    arcs.attr('transform', 'translate(' + dims.center.x + ',' + dims.center.y  + ')');
    lines.attr('transform', 'translate(' + dims.center.x + ',' + dims.center.y + ')');

    var pieData = pie(chartData);

    // calculate the path information for each wedge
    var pieArcs = d3.svg.arc()
        .innerRadius(dims.innerRadius)
        .outerRadius(dims.outerRadius);

    var pieCircles = d3.svg.arc()
        .innerRadius(dims.outerRadius)
        .outerRadius(dims.outerRadius);

    var pieLabelCircles = d3.svg.arc()
        .innerRadius(dims.labelRadius)
        .outerRadius(dims.labelRadius);

    $.extend(charts.settings, {
      svg: svg,
      chartType: 'Pie'
    });

    // Draw the arcs.
    var enteringArcs = arcs.selectAll('.arc').data(pieData).enter();
    enteringArcs.append('path')
      .attr('class', 'arc')
      .on('contextmenu',function (d) {
        self.triggerContextMenu(d3.select(this).select('path')[0][0], d);
      })
      .on('click', function (d, i) {
        var isSelected = this && d3.select(this).classed('is-selected');

        if (isSelected) {
          // Make unselected
          charts.setSelectedElement({
            task: 'unselected',
            container: container,
            selector: '.chart-container .is-selected',
            isTrigger: false,
            d: d.data,
            i: i
          });
          $(container).triggerHandler('selected', [d3.select(this)[0], {}, i]);
        }
        else {
          // Make selected
          charts.setSelectedElement({
            task: 'selected',
            container: container,
            selector: this,
            isTrigger: true,
            d: d.data,
            i: i
          });
        }
      })
      .on('mouseenter', function(d, i) {
        var size, x, y, t, tx, ty,
          offset = parent.offset(),
          content = '',
          show = function() {
            size = charts.getTooltipSize(content);
            x -= size.width/2;
            y -= size.height/2;

            if (content !== '') {
              charts.showTooltip(x, y, content, 'top');
            }
          };

        var circles = svg.selectAll('.pie-circle');
        t = d3.transform(d3.select(circles[0][i]).attr('transform'));
        tx = t.translate[0] + (t.translate[0] > 0 ? 10 * -1: 10 * 1);
        ty = t.translate[1] + (t.translate[1] > 0 ? 10 * -1: 10 * 1);

        //Adjustments
        ty += (t.translate[0] > 0 && t.translate[1] > 0 ? -32 : 0);
        tx += (t.translate[1] > 0 && t.translate[0] < 0 ? 17 : 0);
        ty += (t.translate[1] < 0 && t.translate[0] < 0 ? -17 : 0);
        ty += (t.translate[0] < 0 && t.translate[1] > 0 ? -24 : 0);

        x = tx + offset.left + dims.center.x;
        y = ty + offset.top + dims.center.y;

        if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCache[i]) {
          var runInterval = true;
          tooltipInterval = setInterval(function() {
            if(runInterval) {
              runInterval = false;
              tooltipData(function (data) {
                content = tooltipDataCache[i] = data;
              });
            }
            if(content !== '') {
              clearInterval(tooltipInterval);
              show();
            }
          }, 10);
        } else {
          tooltipData = typeof tooltipData === 'object' ? '' : tooltipData;
          content = tooltipDataCache[i] || tooltipData || d.data.tooltip || d.data.data.tooltip || '';
          content = content.replace('{{percent}}', d.data.percent + '%');
          content = content.replace('{{value}}', d.value);
          content = content.replace('%percent%', d.data.percent + '%');
          content = content.replace('%value%', d.value);
          show();
        }
      })
      .on('mouseleave', function () {
        clearInterval(tooltipInterval);
        charts.hideTooltip();
      })
      .style('fill', function(d, i) {return charts.chartColor(i, 'pie', d.data); })
      .transition().duration(750)
      .attrTween('d', function(d) {
        var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        return function(t) { d.endAngle = i(t); return pieArcs(d); };
      });


    // Now we'll draw our label lines, etc.
    var textLabels, textX=[], textY=[],
      labelsContextFormatter = function (d, context, formatterString, isShortName) {
        formatterString = /percentage/i.test(context) ? '0.0%' : formatterString;
        var r,
          format = d3.format(formatterString || ''),
          percentage = format(d.value / total),
          name = isShortName ? (d.data.shortName || d.data.name.substring(0, 6) +'...') : d.data.name,
          value = formatterString && formatterString !== '0.0%' ? format(d.value) : d.value;

        // 'name'|'value'|'percentage'|'name, value'|'name (value)'|'name (percentage)'
        switch (context) {
          case 'name': r = name; break;
          case 'value': r = value; break;
          case 'percentage': r = percentage; break;
          case 'name, value': r = name + ', '  + value; break;
          case 'name (value)': r = name + ' (' + value + ')'; break;
          case 'name (percentage)': r = name + ' (' + percentage + ')'; break;
          default: r = name + ', ' + value + ' (' + percentage + ')'; break;
        }
        return r || '';
      },

      labelsColorFormatter = function (d, i, opt) {
        return opt === 'color-as-arc' ? (charts.chartColor(i, 'pie', d.data)) : (opt === 'default' ? '' : opt);
      },

      drawTextlabels = function (isShortName) {
        svg.selectAll('.lb-top').each(function(d, i) {
          d3.select(this)
            .text(function() {
              return labelsContextFormatter(d, lb.contentsTop, lb.formatterTop, isShortName);
            })
            .style({
              'font-weight': lb.isTwoline ? 'bold' : 'normal',
              'font-size': lb.isTwoline ? (dims.width > 450 ? '1.3em' : '1.1em') : '1em',
              'fill': function() {
                return labelsColorFormatter(d, i, lb.colorTop);
              }
            });
        });

        if (lb.isTwoline) {
          svg.selectAll('.lb-bottom').each(function(d, i) {
            d3.select(this)
              .text(function() {
                return labelsContextFormatter(d, lb.contentsBottom, lb.formatterBottom, isShortName);
              })
              .style({
                'font-size': '1em',
                'fill': function() {
                  return labelsColorFormatter(d, i, lb.colorBottom);
                }
              });
          });
        }
      },

      addLabels = function () {
        svg.selectAll('.labels').remove();

        var labels = svg.append('g').attr('class','labels'),
          enteringLabels = labels.selectAll('.label').data(pieData).enter(),
          labelGroups = enteringLabels.append('g').attr('class', 'label');

        labels.attr('transform', 'translate(' + dims.center.x + ',' + dims.center.y + ')');

        labelGroups.append('circle')
          .style('fill', 'none')
          .attr({'class': 'pie-circle', x: 0, y: 0, r: 1,
            transform: function (d) {
              var x = pieCircles.centroid(d)[0],
                y = pieCircles.centroid(d)[1];
              return 'translate(' + x + ',' + y + ')';
            }
          });

        labelGroups.append('circle')
          .style('fill', 'none')
          .attr({'class': 'label-circle', x: 0, y: 0, r: 1,
            transform: function (d) {
              var x = pieLabelCircles.centroid(d)[0],
                y = pieLabelCircles.centroid(d)[1];
              return 'translate(' + x + ',' + y + ')';
            }
          });

        textLabels = labelGroups.append('text').attr({
          'class': 'label-text',
          'x': function (d) {
            var centroid = pieArcs.centroid(d),
              midAngle = Math.atan2(centroid[1], centroid[0]),
              x = Math.cos(midAngle) * dims.labelRadius,
              sign = (x > 0) ? 1 : -1,
              labelX = x + (1 * sign);

            textX.push(labelX);
            return labelX;
          },
          'y': function (d) {
            var centroid = pieArcs.centroid(d),
              midAngle = Math.atan2(centroid[1], centroid[0]),
              y = Math.sin(midAngle) * dims.labelRadius;
            textY.push(y);
            return y;
          },
          'text-anchor': function (d) {
            var centroid = pieArcs.centroid(d),
             midAngle = Math.atan2(centroid[1], centroid[0]),
              x = Math.cos(midAngle) * dims.labelRadius;
            return (x > 0) ? 'start' : 'end';
          }
        });

        textLabels.append('tspan').attr('class', 'lb-top');
        if (lb.isTwoline) {
          textLabels.append('tspan')
            .attr({'class': 'lb-bottom',
              'x': function(d, i) { return textX[i]-2; },
              'dy': '18'
            });
        }

        if (lb.hideLabels) {
          drawTextlabels();

          // Add center label only if its donut chart
          if (isDonut) {
            arcs.append('text')
              .attr('dy', '.35em')
              .style('text-anchor', 'middle')
              .attr('class', 'chart-donut-text')
              .html(centerLabel);
          }
        }
      };
      addLabels();

      if (lb.hideLabels) {
        // Resolve label positioning collisions
        (function () {
          var spacing = Math.round(textLabels.node().getBBox().height) + 1;

          // Record org x, y position
          var orgLabelPos = textLabels[0].map(function(d) {
            d = d3.select(d);
            return { x: +d.attr('x'), y: +d.attr('y') };
          });

          // Fix y position
          function relax() {
            var again = false;
            textLabels.each(function (d, i) {
              var a = this,
                da = d3.select(a),
                y1 = +da.attr('y');

              textLabels.each(function (d2, i2) {
                if (i2 > i) {
                  var deltaY,
                    b = this,
                    db = d3.select(b),
                    y2 = +db.attr('y');

                  if (da.attr('text-anchor') === db.attr('text-anchor')) {
                    deltaY = y1 - y2;
                    if (Math.abs(deltaY) < spacing) {
                      again = true;
                      db.attr('y', y2 > 0 ? y2-1 : y2+1); //padding
                    }
                  }
                }
              });
            });

            if(again) {
              relax();
            }
          }
          relax();

          // Fix x position
          textLabels.each(function(d, i) {
            var label = d3.select(this),
              x1 = +label.attr('x'),
              y1 = +label.attr('y'),
              sign = (x1 > 0 ? 1 : -1),
              x = (dims.labelRadius - Math.abs(y1) + Math.abs(orgLabelPos[i].x + (spacing * 2.5))) * sign;

            if (orgLabelPos[i].y !== y1 || (i === 0 && chartData[i].percent < 10)) {
              x += chartData[i].percent < 10 ? x1 : Math.ceil(x1/3);
              label.attr('x', x);

              if (lb.isTwoline) {
                label.select('.lb-bottom').attr('x', x);
              }
            }
          });

        })();

        // Draw lines and set short name
        (function () {
          var lineFunction = d3.svg.line()
            .x(function(d) { return d.x; })
            .y(function(d) { return d.y; })
            .interpolate('basis');

          var labels = svg.selectAll('.label'),
            labelsRect = svg.select('.labels').node().getBoundingClientRect();

            // Set short names
            if(labelsRect.left < 45 || labelsRect.width > (dims.width - 15)) {// 15: extra padding
              drawTextlabels({ isShortName: true });
              svg.selectAll('.label-text tspan').each(function() {
                if (d3.select(this).text().substring(5) === '...') {
                  legendshow = true;
                }
              });
            }

          // Collect source and targets [x, y] position
          labels.each(function(d, i) {
            var label = d3.select(this),
              pieCircle = label.select('.pie-circle'),
              labelCircle = label.select('.label-circle'),
              text = label.select('.label-text'),
              ct = d3.transform(pieCircle.attr('transform')),
              ct2 = d3.transform(labelCircle.attr('transform')),
              points = [
                { x:Number(ct.translate[0]), y:Number(ct.translate[1]) },
                { x:Number(ct2.translate[0]), y:Number(ct2.translate[1]) },
                { x:Number(text.attr('x')), y:Number(text.attr('y')) + (lb.isTwoline ? 5 : 0) }
              ];

            // Draw line from center of arc to label
            if (lb.linehideWhenMoreThanPercentage > chartData[i].percent) {
              lines.append('path')
                .attr({
                  'class': 'label-line',
                  'd': lineFunction(points)
                })
                .style({
                  'stroke-width': lb.lineWidth,
                  'stroke': function() { return labelsColorFormatter(d, i, lb.lineColor); }
                });
              }
          });

        })();
      } // END: lb.hideLabels
      else {
        legendshow = true;
      }

    //Get the Legend Series'
    var series = chartData.map(function (d) {
      var name = d.name +' ('+ d.percent +'%)';
      return {name:name, display:'twocolumn', color: d.color};
    });

    // Add Legends
    if (legendshow || charts.legendformatter) {
      charts[charts.legendformatter ? 'renderLegend' : 'addLegend'](series);
    }

    // Set initial selected
    (function () {
      var selected = 0,
        selector;
      arcs.selectAll('.arc').each(function(d, i) {
        if (!d || !d.data || !d.data.data) {
          return;
        }
        if (d.data.data.selected && selected < 1) {
          selected++;
          selector = d3.select(this);
          selector.on('click').call(selector.node(), selector.datum(), i);
        }
      });
    })();

    $(container).trigger('rendered');
    return $(container);
  };

  this.elementTransform = function(options) {
    options.element.attr('transform', function () {
      var el = options.sameAs || this,
        t = d3.transform(d3.select(el).attr('transform')),
        x = t.translate[0],
        y = t.translate[1];

      x = options.addtoX ? (x>0?(x+options.addtoX):(x-options.addtoX)) : x;
      y = options.addtoY ? (y>0?(y+options.addtoY):(y-options.addtoY)) : y;
      return 'translate('+ x +','+ y +')';
    });
  };

  this.moveLabels = function(options) {
    var labelElements = options.textLabels[0];
    if (options.addtoX) {
      options.textLabels.attr('x',function() {
        var x = d3.select(this).attr('x');
        return x > 0 ? (x + options.addtoX) : (x - options.addtoX);
      });
      options.textLines.attr('x2',function(d, i) {
        var labelForLine = d3.select(labelElements[i]);
        return labelForLine.attr('x');
      });
    }
    else if (options.addtoY) {
      options.textLabels.attr('y',function() {
        var y = Number(d3.select(this).attr('y'));
        return y > 0 ? (y + options.addtoY) : (y - options.addtoY);
      });
      options.textLines.attr('y2',function(d, i) {
        var labelForLine = d3.select(labelElements[i]);
        return labelForLine.attr('y');
      });
    }
  };

  //TODO: Test this with two charts on the page.
  this.handleResize = function () {
    var timeout = null,
      width = 0;

    //Handle Resize / Redraw
    function resizeCharts() {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        var api = $(container).data('chart'),
            cont = $(container);

        if (width === cont.width()) {
          return;
        }

        width = cont.width();

        if (!cont.is(':visible')) {
          return true;
        }
        cont.empty();
        api.initChartType(api.settings);
      }, 100);
    }

    if (this.redrawOnResize) {
      $(window).on('resize.charts', resizeCharts);
      $(container).off('resize').on('resize', resizeCharts);
    }
  };

  // Donut Chart - Same as Pie but inner radius
  this.Ring = function(chartData) {
    return charts.Pie(chartData, true);
  };

  //Conserve aspect ratio of the orignal region. Useful when shrinking/enlarging
  this.calculateAspectRatioFit = function (d) {
    var ratio = Math.min(d.maxWidth / d.srcWidth, d.maxHeight / d.srcHeight);
    return { width: d.srcWidth*ratio, height: d.srcHeight*ratio };
  };

  // Sparkline Chart
  this.Sparkline = function(chartData, options) {
    var tooltipIntervalMedianRange,
      tooltipIntervalDots,
      tooltipDataCacheMedianRange = [],
      tooltipDataCacheDots = [],
      tooltipData = charts.options.tooltip;

    // calculate max and min values in the NLWest data
    var max=0, min=0, len=0, i,
      dimensions = this.calculateAspectRatioFit({
        srcWidth: 385,
        srcHeight: 65,
        maxWidth: $(container).width(),
        maxHeight: 600 //container min-height
      }),
      dotsize = dimensions.width > 300 ? 4 : 3;

    for (i = 0; i < chartData.length; i++) {
      min = d3.min([d3.min(chartData[i].data), min]);
      max = d3.max([d3.max(chartData[i].data), max]);
      len = d3.max([chartData[i].data.length, len]);
    }

    var p = 10,
      w = dimensions.width,
      h = dimensions.height,
      x = d3.scale.linear().domain([0, len]).range([p, w - p]),
      y = d3.scale.linear().domain([min, max]).range([h - p, p]),
      line = d3.svg.line()
                   .x(function(d, i) { return x(i); })
                   .y(function(d) { return y(d); });

    charts.appendTooltip();
    var svg = d3.select(container)
      .append('svg')
      .attr('height', h)
      .attr('width', w);

    //Add Median Range
    //https://www.purplemath.com/modules/meanmode.htm
    if(options.isMedianRange) {
      max = d3.max(chartData[0].data);
      min = d3.min(chartData[0].data);

      var minWidth = 10,
        maxWidth = w-45,
        median = d3.median(chartData[0].data),
        range = max-min,
        scaleMedianRange = d3.scale.linear().domain([min, max]).range([0, h]),
        top = h-scaleMedianRange(median>range ? median : range),
        bot = h-scaleMedianRange(median<range ? median : range);

      svg.append('g')
        .attr('class', 'medianrange')
        .attr('transform', function() {return 'translate('+ minWidth +','+ top +')';})
        .append('rect')
        .attr('width', maxWidth)
        .attr('height', bot)
        .style('fill', '#d8d8d8')
        .on('mouseenter', function(d, i) {
          var rect = this.getBoundingClientRect(),
            content = '<p>' + (chartData[0].name ? chartData[0].name +'<br> ' : '') +
            Locale.translate('Median') + ': <b>'+ median +'</b><br>'+
            Locale.translate('Range') +': <b>'+ range +'</b>'+
            (options.isPeakDot ? '<br>'+Locale.translate('Peak') +': <b>'+ max +'</b>' : '') +'</p>',
            show = function() {
              var size = charts.getTooltipSize(content),
                x = rect.left + ((rect.width - size.width)/2),
                y = rect.top - size.height - 5; // 5: extra padding

              if(content !== '') {
                charts.showTooltip(x, y, content, 'top');
              }
            };

          if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCacheMedianRange[i]) {
            content = '';
            var runInterval = true;
            tooltipIntervalMedianRange = setInterval(function() {
              if(runInterval) {
                runInterval = false;
                tooltipData(function (data) {
                  content = tooltipDataCacheMedianRange[i] = data;
                });
              }
              if(content !== '') {
                clearInterval(tooltipIntervalMedianRange);
                show();
              }
            }, 10);
          } else {
            tooltipData = typeof tooltipData === 'object' ? '' : tooltipData;
            content = tooltipDataCacheMedianRange[i] || tooltipData || chartData[0].tooltip || content || '';
            show();
          }
        })
        .on('mouseleave', function() {
          clearInterval(tooltipIntervalMedianRange);
          charts.hideTooltip();
        });
    }

    for (i = 0; i < chartData.length; i++) {
      var set = chartData[i],
        g = svg.append('g');
        g.append('path')
         .attr('d', line(set.data))
         .attr('stroke', options.isMinMax ? '#999999' : charts.sparklineColors(i))
         .attr('class', 'team');
    }


    //Add Dots (Dots/Peak/MinMAx)
    min = d3.min(chartData[0].data);
      svg.selectAll('.point')
        .data(chartData[0].data)
        .enter()
        .append('circle')
        .attr('r', function(d) {
          return (options.isMinMax && max === d || options.isMinMax && min === d) ? (dotsize+1) :
            (options.isDots || (options.isPeakDot && max === d)) ? dotsize : 0;
        })
        .attr('class', function(d) {
          return (options.isPeakDot && max === d && !options.isMinMax) ? 'point peak' :
            (options.isMinMax && max === d) ? 'point max' :
            (options.isMinMax && min === d) ? 'point min' : 'point';
        })
        .style('fill', function(d) {
          return (options.isPeakDot && max === d && !options.isMinMax) ? '#ffffff' :
            (options.isMinMax && max === d) ? '#56932E' :
            (options.isMinMax && min === d) ? '#941E1E' : charts.sparklineColors(0);
        })
        .style('stroke', function(d) {
          return (options.isPeakDot && max === d && !options.isMinMax) ? charts.sparklineColors(0) :
            (options.isMinMax && max === d) ? 'none' :
            (options.isMinMax && min === d) ? 'none' : '#ffffff';
        })
        .style('cursor', 'pointer')
        .attr('cx', function(d, i) { return x(i); })
        .attr('cy', function(d) { return y(d); })
        .on('mouseenter', function(d) {
          var rect = this.getBoundingClientRect(),
            content = '<p>' + (chartData[0].name ? chartData[0].name + '<br> ' +
              ((options.isMinMax && max === d) ? Locale.translate('Highest') + ': ' :
               (options.isMinMax && min === d) ? Locale.translate('Lowest') + ': ' :
               (options.isPeakDot && max === d) ? Locale.translate('Peak') + ': ' : '') : '') + '<b>' + d  + '</b></p>',
            show = function() {
              var size = charts.getTooltipSize(content),
                x = rect.left - (size.width /2) + 6,
                y = rect.top - size.height - 8;

              if(content !== '') {
                charts.showTooltip(x, y, content, 'top');
              }
            };

          if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCacheDots[i]) {
            content = '';
            var runInterval = true;
            tooltipIntervalDots = setInterval(function() {
              if(runInterval) {
                runInterval = false;
                tooltipData(function (data) {
                  content = tooltipDataCacheDots[i] = data;
                });
              }
              if(content !== '') {
                clearInterval(tooltipIntervalDots);
                show();
              }
            }, 10);
          } else {
            tooltipData = typeof tooltipData === 'object' ? '' : tooltipData;
            content = tooltipDataCacheDots[i] || tooltipData || chartData[0].tooltip || content || '';
            show();
          }

          d3.select(this).attr('r', (options.isMinMax && max === d ||
            options.isMinMax && min === d) ? (dotsize+2) : (dotsize+1));
        })
        .on('mouseleave', function(d) {
          clearInterval(tooltipIntervalDots);
          charts.hideTooltip();
          d3.select(this).attr('r', (options.isMinMax && max === d ||
            options.isMinMax && min === d) ? (dotsize+1) : dotsize);
        });

    $(container).trigger('rendered');

    return $(container);
  };

  // Column Chart - Sames as bar but reverse axis
  this.Column = function(chartData, isStacked) {
    var defaults = {
      // Use d3 Format
      // http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html
      // [null | formatter string] - Only value will be formated
      formatterString: null,
    },
    settings = $.extend(true, defaults, charts.options),
    isFormatter = !!settings.formatterString,
    format = function (value) {
      return isFormatter ? d3.format(settings.formatterString)(value) : value;
    };

    var datasetStacked,
      dataset = chartData,
      self = this,
      parent = $(container).parent(),
      isPositiveNegative = (charts.settings.type === 'column-positive-negative'),
      isSingular = (dataset.length === 1),
      margin = {top: 40, right: 40, bottom: (isSingular && chartData[0].name === undefined ? (isStacked ? 20 : 50) : 35), left: 45},
      legendHeight = 40,
      width = parent.width() - margin.left - margin.right - 10,
      height = parent.height() - margin.top - margin.bottom - (isSingular && chartData[0].name === undefined ? (isStacked || isPositiveNegative ? legendHeight : 0) : legendHeight),
      yMin, yMax, yMinTarget, yMaxTarget, series, seriesStacked,
      pnColors, pnPatterns, pnLegends, pnSeries;

    yMin = d3.min(dataset, function (group) {
      return d3.min(group.data, function (d) {
          return d.value;
      });
    });

    yMax = d3.max(dataset, function (group) {
      return d3.max(group.data, function (d) {
          return d.value;
      });
    });

    if (isPositiveNegative) {
      yMinTarget = d3.min(dataset, function (group) {
        return d3.min(group.data, function (d) {
            return d.target;
        });
      });

      yMaxTarget = d3.max(dataset, function (group) {
        return d3.max(group.data, function (d) {
            return d.target;
        });
      });

      yMin = d3.min([yMin, yMinTarget]);
      yMax = d3.max([yMax, yMaxTarget]);

      pnLegends = {target: 'Target', positive: 'Positive', negative: 'Negative'};
      pnColors = {target: 'neutral', positive: 'good', negative: 'error'};
      pnPatterns = {};

      if (dataset[0]) {
        if (dataset[0].colors) {
          $.extend(true, pnColors, dataset[0].colors);
        }
        if (dataset[0].legends) {
          $.extend(true, pnLegends, dataset[0].legends);
        }
        if (dataset[0].patterns) {
          $.extend(true, pnPatterns, dataset[0].patterns);
        }
      }
      //Converting object into array
      pnSeries = [];
      $.each(pnLegends, function(key, val) {
        pnSeries.push({
          name: val,
          color: pnColors[key],
          pattern: pnPatterns[key],
          option: key
        });
      });
    }

    $(container).addClass('column-chart');

    var tooltipInterval,
      tooltipDataCache = [],
      tooltipData = charts.options.tooltip;

    var x0 = d3.scale.ordinal()
      .rangeRoundBands([0, width], 0.1);

    var x1 = d3.scale.ordinal();

    var y = d3.scale.linear()
      .range([height, 0]);

    if (isStacked) {
      //Map the Data Sets and Stack them.
      if (isSingular) {
        datasetStacked = dataset[0].data.map(function (d) {
          return [$.extend({}, d, {
            y: d.value,
            x: d.name,
            color: d.color,
            pattern: d.pattern,
            parentName: d.name,
            tooltip: d.tooltip
          })];
        });
      } else {
        datasetStacked = dataset.map(function (d) {
          return d.data.map(function (o) {
            return $.extend({}, o, {
              y: o.value,
              x: o.name,
              color: o.color,
              pattern: o.pattern,
              parentName: d.name,
              tooltip: d.tooltip
            });
          });
        });
      }

      var stack = d3.layout.stack();
      stack(datasetStacked);

      var xScale = d3.scale.ordinal()
        .domain(d3.range(datasetStacked[0].length))
        .rangeRoundBands([0, width], 0.05);

      var yScale = d3.scale.linear()
        .domain([0,
          d3.max(datasetStacked, function(d) {

            return d3.max(d, function(d) {
              return d.y0 + d.y;
            });
          })
        ])
        .range([0, height]);
    }

    //List the values along the x axis
    var xAxisValues = dataset[0].data.map(function (d) {return d.name;});

    var xAxis = d3.svg.axis()
        .scale(x0)
        .tickSize(0)
        .tickPadding(12)
        .orient('bottom');

    var yAxis = d3.svg.axis()
        .scale(y)
        .tickSize(-width)
        .tickPadding(12)
        .tickFormat(d3.format(charts.format || 's'))
        .orient('left');

    var svg = d3.select(container)
      .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
          .attr('transform', 'translate('+ margin.left +','+ margin.top +')');

    // Get the Different Names
    var names = dataset.map(function (d) {
      return d.name;
    });

    //Get the Maxes of each series
    var maxesStacked, maxes = dataset.map(function (d) {
      return d3.max(d.data, function(d){
        return isPositiveNegative ? d.target : d.value;
      });
    });

    if (isStacked) {
      maxesStacked = datasetStacked.map(function (d) {
        return d3.max(d, function(d){ return d.y + d.y0;});
      });
    }

    if (isSingular) {
      names = dataset[0].data.map(function (d) {
        return d.name;
      });
    }

    // Extra ticks
    if (isPositiveNegative) {
      yMin += yMin / y.ticks().length;
      maxes[0] += maxes[0] / y.ticks().length;
    }

    // Set series
    (function() {
      if (isStacked && isSingular) {
        series = dataset[0].data;
      }
      else {
        var i, l, lm;
        // Loop backwards to catch and override with found first custom info from top
        for (i = dataset.length-1,l = -1; i > l; i--) {
          lm = dataset[i].data.map(function (d) {
            return d;
          });
          $.extend(true, series, lm);
          // Convert back to array from object
          series = $.map(series, function(d) {
            return d;
          });
        }
      }
    })();

    if (isStacked && !isSingular) {
      seriesStacked = names.map(function (d, i) {
        return dataset[i];
      });
    }

    x0.domain(isStacked ? xAxisValues : names);
    x1.domain(xAxisValues).rangeRoundBands([0, (isSingular||isStacked) ? width : x0.rangeBand()]);
    y.domain([(yMin < 0 ? yMin : (charts.settings.minValue || 0)), d3.max(isStacked ? maxesStacked : maxes)]).nice();

    if (!isSingular || (isSingular && !isStacked)) {
      svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);
    }

    svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis);

    //Make an Array of objects with name + array of all values
    var dataArray = [];
    chartData.forEach(function(d) {
      dataArray.push($.extend({}, d, {values: d.data}));
    });

    if (isSingular) {
      dataArray = [];
      names = dataset[0].data.forEach(function (d) {
        dataArray.push(d);
      });
    }

    var bars, targetBars, pnBars,
      barMaxWidth = 35,
      color = function(colorStr) {
        return charts.chartColor(0, '', {'color': colorStr});
      },
      onEndAllTransition = function (transition, callback) {
        var n;
        if (transition.empty()) {
          callback();
        }
        else {
          n = transition.size();
          transition.each('end', function() {
            n--;
            if (n === 0) {
              callback();
            }
          });
        }
      };

    function drawBars(isTargetBars) {
      var bars;
      isTargetBars = isPositiveNegative && isTargetBars;

      // Add the bars - done different depending on if grouped or singlular
      if (isSingular || isPositiveNegative) {
        bars = svg.selectAll('rect' + (isTargetBars ? '.target-bar' : '.bar'))
          .data(isStacked ? datasetStacked : dataArray)
          .enter()
          .append('rect')
          .attr('class', function(d, i) {
            var classStr = 'bar series-'+ i;

            if (isPositiveNegative) {
              classStr = (isTargetBars ? ('target-bar series-'+ i) : classStr) +
                (d.value > 0 ? ' positive' : ' negative');
            }
            return classStr;
          })
          .attr('width', Math.min.apply(null, [x1.rangeBand()-2, barMaxWidth]))
          .attr('x', function(d) {
            return isStacked ? xScale(0) : (x1(d.name) + (x1.rangeBand() - barMaxWidth)/2);
          })
          .attr('y', function() {
            return y(0) > height ? height : y(0);
          })
          .attr('height', function() {
            return 0;
          })
          .attr('mask', function (d) {
            return !isPositiveNegative ? null :
              (isTargetBars ? (pnPatterns.target ? 'url(#' + pnPatterns.target + ')' : null) :
                (d.value < 0 ? (pnPatterns.negative ? 'url(#' + pnPatterns.negative + ')' : null) :
                (pnPatterns.positive ? 'url(#' + pnPatterns.positive + ')' : null))
              );
          })
          .style('fill', function(d) {
            return !isPositiveNegative ? null :
              color(isTargetBars ? pnColors.target : (d.value < 0 ? pnColors.negative : pnColors.positive));
          });

        if (isPositiveNegative) {
          var yTextPadding = 12;
          svg.selectAll(isTargetBars ? '.target-bartext' : '.bartext')
            .data(dataArray)
            .enter()
            .append('text')
            .attr('class', function(d) {
              return (isTargetBars ? 'target-bartext' : 'bartext') +
                (d.value > 0 ? ' positive' : ' negative');
            })
            .attr('text-anchor', 'middle')
            .attr('x', function(d) {
              return x1(d.name) + (x1.rangeBand())/2;
            })
            .attr('y', function(d) {
              return isTargetBars ?
                (y(d.target) - (yTextPadding/2)) : (y(d.value > 0 ? 0 : d.value) + yTextPadding);
            })
            .style('opacity', 0)
            .style('fill', function(d) {
              return isTargetBars ? '' /* color(pnColors.target) */ :
                (d.value < 0 ? color(pnColors.negative) : color(pnColors.positive));
            })
            .style('font-weight', 'bold')
            .text(function(d) {
              return format(isTargetBars ? d.target : d.value);
            });
        }

        bars.transition().duration(1000)
          .call(onEndAllTransition, function () {
            svg.selectAll('.target-bartext, .bartext')
              .transition().duration(300).style('opacity', 1);
          })
          .attr('y', function(d) {
            var r = isStacked ? (height - yScale(d[0].y) - yScale(d[0].y0)) :
            (d.value < 0 ? y(0) : y(d.value));
            return (isTargetBars ? y(d.target) : (d.value < 0 ? r : (r > (height-3) ? height-2 : r)));
          })
          .attr('height', function(d) {
            var r;
            if (isStacked) {
              r = yScale(d[0].y);
            }
            else {
              if (d.value < 0) {
                r = (height-y(0)) - (height-y(d.value));
              }
              else {
                r = (height-y(d.value)) - (height-y(0));
              }
            }
            r = d.value < 0 ? r : (r < 3 ? 2 : (r > height ? (height-y(d.value)) : r));
            return isTargetBars ? (height-y(d.target)) - (height-y(0)) : r;
          });
      } else {
        var xValues = svg.selectAll('.x-value')
          .data(isStacked ? datasetStacked : dataArray)
          .enter()
          .append('g')
          .attr('class', 'series-group g')
          .attr('data-group-id', function (d, i) {
            return i;
          })
          .attr('transform', function(d) {
            return 'translate(' + x0(isStacked ? xAxisValues[0] : d.name) + ',0)';
          });

        bars = xValues.selectAll('rect')
          .data(function(d) {return isStacked ? d : d.values;})
          .enter()
          .append('rect')
            .attr('class', function(d, i) {
              return 'series-'+ i +' bar';
            })
            .attr('width', Math.min.apply(null, [x1.rangeBand()-2, barMaxWidth]))
            .attr('x', function(d, i) {
              var width = Math.min.apply(null, [x1.rangeBand()-2, barMaxWidth]);
              return isStacked ? xScale(i) : (x1.rangeBand()/2 + ((width + 2) * i) - (dataArray[0].values.length === 1 || dataArray[0].values.length === 5 || dataArray[0].values.length === 4  ? (width/2) : 0) );//' * (dataArray[0].values.length/2)) );
            })
            .attr('y', function() {return y(0) > height ? height : y(0);})
            .attr('height', function() {return 0;});

        bars
          .transition().duration(1000)
          .attr('y', function(d) {
            var r = isStacked ? (height-yScale(d.y)-yScale(d.y0)) : (d.value < 0 ? y(0) : y(d.value));
            return d.value < 0 ? r : (r > (height-3) ? height-2 : r);
          })
          .attr('height', function(d) {
            var r;
           if (isStacked) {
             r = yScale(d.y);
           }
           else {
             if (d.value < 0) {
               r = (height-y(0)) - (height-y(d.value));
             }
             else {
               r = (height-y(d.value)) - (height-y(0));
             }
           }
           return d.value < 0 ? r : (r < 3 ? 2 : (r > height ? (height-y(d.value)) : r));
          });
      }
      return bars;
    }

    if (isPositiveNegative) {
      targetBars = drawBars(true); //Draw target bars
    }
    bars = drawBars();

    if (isPositiveNegative) {
      pnBars = d3.selectAll('.empty-bars');
      charts.mergeArrays(pnBars[0], targetBars[0], bars[0]);
    }

    if (!isPositiveNegative) {
      //Style the bars and add interactivity
      if (!isStacked) {
        bars
          .style('fill', function(d, i) {
            return isSingular ?
              charts.chartColor(i, 'column-single', chartData[0].data[i]) :
              charts.chartColor(i, 'bar', series[i]);
          })
          .attr('mask', function (d, i) {
            return isSingular ?
              (chartData[0].data[i].pattern ? 'url(#'+ chartData[0].data[i].pattern +')' : null) :
              (series[i].pattern ? 'url(#'+ series[i].pattern +')' : null);
          });
      }
      else if (isStacked && !isSingular) {
        bars
          .style('fill', function() {
            var thisGroup = d3.select(this.parentNode).attr('data-group-id');
            return charts.chartColor(thisGroup, 'bar', dataset[thisGroup]);
          })
          .attr('mask', function() {
            var thisGroup = d3.select(this.parentNode).attr('data-group-id');
            return (dataset[thisGroup].pattern ? 'url(#'+ dataset[thisGroup].pattern +')' : null);
          });
      }
      else if (isStacked && isSingular) {
        bars
          .style('fill', function(d, i) {
            return charts.chartColor(i, 'bar', d[0]);
          })
          .attr('mask', function(d) {
            return (d[0].pattern ? 'url(#'+ d[0].pattern +')' : null);
          });
      }
    }

    var isSingle = isSingular || !isSingular && isStacked,
      isGrouped = !isSingle;

    $.extend(charts.settings, {
      svg: svg,
      chartType: 'Column',
      isSingle: isSingle,
      isGrouped: isGrouped,
      isStacked: isStacked,
      isSingular: isSingular
    });

    (isPositiveNegative ? pnBars : bars)
      .on('mouseenter', function(d, i) {
        var x, y, j, l, hexColor, size, isTooltipBottom,
          maxBarsForTopTooltip = 6,
          thisShape = this,
          shape = $(this),
          content = '',
          ePageY = d3.event.pageY,

          setPattern = function(pattern, hexColor) {
            return !pattern || !hexColor ? '' :
              '<svg width="12" height="12">'+
                '<rect style="fill: '+ hexColor +'" mask="url(#'+ pattern +')" height="12" width="12" />'+
              '</svg>';
          },

          show = function(isTooltipBottom) {
            size = charts.getTooltipSize(content);
            x = shape[0].getBoundingClientRect().left - (size.width /2) + (shape.attr('width')/2);

            if (isStacked) {
              y = shape[0].getBoundingClientRect().top - size.height - 10;
            } else {
              y = ePageY-charts.tooltip.outerHeight() - 25;
              if (dataset.length > 1) {
                x = thisShape.parentNode.getBoundingClientRect().left - (size.width /2) + (thisShape.parentNode.getBoundingClientRect().width/2);
                if (isTooltipBottom) {
                  y += charts.tooltip.outerHeight() + 50;
                  if (y > (thisShape.parentNode.getBoundingClientRect().bottom + 10)) {
                    y = thisShape.parentNode.getBoundingClientRect().bottom + 10;
                  }
                } else {
                  y = thisShape.parentNode.getBoundingClientRect().top-charts.tooltip.outerHeight() + 25;
                }
              }
            }

            if (content !== '') {
              charts.showTooltip(x, y, content, isTooltipBottom ? 'bottom' : 'top');
            }
          };

        // Stacked
        if (isStacked) {
          if (isSingular) {
            content = '<p><b>'+ format(d[0].value) +'</b> '+ d[0].name +'</p>';
          } else {
            content = ''+
              '<div class="chart-swatch">'+
                '<div class="swatch-caption"><b>'+ datasetStacked[0][i].name +'</b></div>';
            for (j=datasetStacked.length-1,l=0; j>=l; j--) {
              hexColor = charts.chartColor(j, 'bar', dataset[j]);
              content += ''+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (dataset[j].pattern ? 'transparent' : hexColor) +';">'+
                    (setPattern(dataset[j].pattern, hexColor))+
                  '</div>'+
                  '<span>'+ datasetStacked[j][i].parentName +'</span><b>'+ format(datasetStacked[j][i].value) +'</b>'+
                '</div>';
            }
            content += '</div>';
          }
          size = charts.getTooltipSize(content);
          x = shape[0].getBoundingClientRect().left - (size.width /2) + (shape.attr('width')/2);
          y = shape[0].getBoundingClientRect().top - size.height - 10;
        }

        // No Stacked
        else {
          if (isPositiveNegative) {
            content = ''+
              '<div class="chart-swatch">'+
                '<div class="swatch-caption"><b>'+ d.name +'</b></div>'+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (pnPatterns.target ? 'transparent' : color(pnColors.target)) +';">'+
                    (setPattern(pnPatterns.target, color(pnColors.target)))+
                  '</div>'+
                  '<span>'+ pnLegends.target +'</span><b>'+ format(d.target) +'</b>'+
                '</div>'+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (d.value < 0 ?
                    (pnPatterns.negative ? 'transparent' : color(pnColors.negative)) :
                    (pnPatterns.positive ? 'transparent' : color(pnColors.positive))) +
                  ';">'+
                    (d.value < 0 ?
                      setPattern(pnPatterns.negative, color(pnColors.negative)) :
                      setPattern(pnPatterns.positive, color(pnColors.positive)))+
                  '</div>'+
                  '<span>'+ pnLegends[d.value < 0 ? 'negative' : 'positive'] +'</span><b>'+ format(d.value) +'</b>'+
                '</div>'+
              '</div>';
          }
          else if (dataset.length === 1) {
            content = '<p><b>'+ format(d.value) + '</b> '+ d.name +'</p>';
          }
          else {
            var data = d3.select(this.parentNode).datum().values;

            content = '<div class="chart-swatch">';
            for (j=0,l=data.length; j<l; j++) {
              hexColor = charts.chartColor(j, 'bar', series[j]);
              content += ''+
                '<div class="swatch-row">'+
                  '<div style="background-color:'+ (series[j].pattern ? 'transparent' : hexColor) +';">'+
                    (setPattern(series[j].pattern, hexColor))+
                  '</div>'+
                  '<span>'+ data[j].name +'</span><b>'+ format(data[j].value) +'</b>'+
                '</div>';
            }
            content += '</div>';
            isTooltipBottom = data.length > maxBarsForTopTooltip;
          }

          size = charts.getTooltipSize(content);
          x = shape[0].getBoundingClientRect().left - (size.width /2) + (shape.attr('width')/2);
          y = ePageY-charts.tooltip.outerHeight() - 25;
          if (dataset.length > 1) {
            x = this.parentNode.getBoundingClientRect().left - (size.width /2) + (this.parentNode.getBoundingClientRect().width/2);
            y = this.parentNode.getBoundingClientRect().top-charts.tooltip.outerHeight() + 25;
          }
        }

        if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCache[i]) {
          content = '';
          var runInterval = true;
          tooltipInterval = setInterval(function() {
            if (runInterval) {
              runInterval = false;
              tooltipData(function (data) {
                content = tooltipDataCache[i] = data;
              });
            }
            if (content !== '') {
              clearInterval(tooltipInterval);
              show();
            }
          }, 10);
        } else {

          content = tooltipDataCache[i] || tooltipData || content || '';
          if (d.tooltip) {
            var val = d.tooltip.replace('{{value}}', format(d.value));
            content = '<p>'+ val +'</p>';
          }
          show(isTooltipBottom);
        }

      })

      // Mouseleave
      .on('mouseleave', function() {
        clearInterval(tooltipInterval);
        charts.hideTooltip();
      })

      // Click
      .on('click', function (d, i) {
        var selector, isTargetBar = this && d3.select(this).classed('target-bar');
        if (isTargetBar) {
          selector = svg.select('.bar.series-'+ i);
          selector.on('click').call(selector.node(), selector.datum(), i);
          return;
        }

        var isSelected = this && d3.select(this).classed('is-selected'),
          thisGroupId = parseInt(d3.select(this.parentNode).attr('data-group-id'), 10);

        charts.setSelectedElement({
          task: (isSelected ? 'unselected' : 'selected'),
          container: container,
          selector: this,
          isTrigger: !isSelected,
          triggerGroup: isGrouped,
          d: d,
          i: i
        });

        if (isSelected) {
          $(container).triggerHandler('selected', [d3.select(this)[0], {}, (isGrouped ? thisGroupId : i)]);
        }
        return;
      })

      // Contextmenu
      .on('contextmenu',function (d) {
        self.triggerContextMenu(d3.select(this)[0][0], d);
      });

    //Add Legend
    if (isSingular && chartData[0].name) {
      charts.addLegend([{name: chartData[0].name}]);
    }
    else if (isPositiveNegative) {
      charts.addLegend(pnSeries);
    }
    else if (isStacked && isSingular) {
      charts.addLegend(series);
    }
    else if (!isSingular) {
      charts.addLegend(isStacked ? seriesStacked : series);
    }

    //Add Tooltips
    charts.appendTooltip();

    //See if any labels overlap and use shorter */
    // [applyAltLabels] - function(svg, dataArray, elem, selector, isNoEclipse)
    if (charts.labelsColide(svg)) {
      charts.applyAltLabels(svg, dataArray, 'shortName');
    }

    if (charts.labelsColide(svg)) {
      charts.applyAltLabels(svg, dataArray, 'abbrName');
    }

    if (charts.labelsColide(svg)) {
      charts.applyAltLabels(svg, dataArray, null, null, true);
    }

    // Set initial selected
    (function () {
      var selected = 0,
        legendsNode = svg.node().parentNode.nextSibling,
        legends = d3.select(legendsNode),
        isLegends = legends.node() && legends.classed('chart-legend'),
        barIndex, selector, isStackedGroup,

        setSelectedBar = function (g) {
          g = g ? d3.select(g) : svg;
          g.selectAll('.bar').each(function(d, i) {
            if (!d) {
              return;
            }
            if ((isSingular && isStacked ? d[0].selected : d.selected) && selected < 1) {
              selected++;
              selector = d3.select(this);
              barIndex = i;
            }
          });
        },

        setSelectedGroup = function () {
          var groups = svg.selectAll('.series-group');
          if (groups[0].length) {
            groups.each(function() {
              setSelectedBar(this);
            });
          }
        };

      if (isGrouped || (isStacked && !isSingular && !isGrouped)) {
        chartData.forEach(function(d, i) {
          if (d.selected && selected < 1) {
            selected++;
            selector = svg.select('[data-group-id="'+ i +'"]').select('.bar');
            barIndex = i;
            if (isStacked && !isSingular && !isGrouped) {
              isStackedGroup = true;
            }
          }
        });
        if (selected < 1) {
          setSelectedGroup();
        }
      }
      else {
        setSelectedBar();
      }

      if (selected > 0) {
        if (isStackedGroup) {
          if (isLegends) {
            $(legends.selectAll('.chart-legend-item')[0][barIndex]).trigger('click.chart');
          }
        }
        else {
          selector.on('click').call(selector.node(), selector.datum(), barIndex);
        }
      }

    })();

    $(container).trigger('rendered');
    return $(container);
  };

  // Merge the contents of multiple arrays together into the first array
  this.mergeArrays = function() {
    var i, len = arguments.length;
    if (len > 1) {
      for (i = 1; i < len; i++) {
        arguments[i].forEach(function(v) {
          this.push(v);
        }, arguments[0]);
      }
    }
  };

  this.labelsColide = function(svg) {
    var ticks = svg.selectAll('.x text'),
      collides = false;

    ticks.each(function(d, i) {
      var rect1 = this.getBoundingClientRect(), rect2;

      ticks.each(function(d, j) {
        if (i !== j) {
          rect2 = this.getBoundingClientRect();

          var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);

          if (overlap) {
            collides = true;
          }
        }

      });
    });

    return collides;
  };

  this.applyAltLabels = function(svg, dataArray, elem, selector, isNoEclipse) {
    var ticks = selector ? svg.selectAll(selector) : svg.selectAll('.x text');

    ticks.each(function(d, i) {
      var text = dataArray[i][elem];

      text = text || (isNoEclipse ?
        ((d3.select(this).text().substring(0, 1))) : (d3.select(this).text().substring(0, 6) +'...'));
      d3.select(this).text(text);
    });
  };

  this.Line = function(chartData, options, isArea, isBubble) {
    var defaults = {
      // Use d3 Format
      // http://koaning.s3-website-us-west-2.amazonaws.com/html/d3format.html
      // [null | formatter string] - Only value will be formated
      formatterString: null,
    },
    settings = $.extend(true, defaults, charts.options),
    isFormatter = !!settings.formatterString,
    format = function (value) {
      return isFormatter ? d3.format(settings.formatterString)(value) : value;
    };

    $(container).addClass('line-chart' + (isBubble ? ' bubble' : ''));

    var tooltipInterval,
      tooltipDataCache = [],
      tooltipData = charts.options.tooltip;

    //Append the SVG in the parent area.
    var dataset = chartData,
      hideDots = (options.hideDots),
      parent = $(container).parent(),
      isViewSmall = parent.width() < 450,
      margin = {top: 30, right: (isViewSmall ? 35 : 55), bottom: 35, left: (isViewSmall ? 45 : 65)},
      width = parent.width() - margin.left - margin.right,
      height = parent.height() - margin.top - margin.bottom - 30; //legend

    var svg = d3.select(container).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var names = dataset[0].data.map(function (d) {
      return d.name;
    });

    var formatValue,
      valueFormatterString = {};
    if (dataset[0] && dataset[0].valueFormatterString) {
      $.extend(true, valueFormatterString, dataset[0].valueFormatterString);
    }
    formatValue = function (s, value) {
      return !$.isEmptyObject(valueFormatterString) && !!s ?
        (d3.format(s)(s === '0.0%' ? value/100 : value)) : value;
    };

    var labels = {
      name: 'Name',
      value: {
        x: 'Value.x',
        y: 'Value.y',
        z: 'Value.z'
      }
    };
    if (dataset[0] && dataset[0].labels) {
      $.extend(true, labels, dataset[0].labels);
    }

    // Calculate the Domain X and Y Ranges
    var maxes,
      x = d3.scale.linear().range([0, width]),
      y = d3.scale.linear().range([height, 0]),
      z = d3.scale.linear().range([1, 25]),
      getMaxes = function (d, option) {
        return d3.max(d.data, function(d) {
          return option ? d.value[option] : d.value;
        });
      };

    if (isBubble) {
      maxes = {
        x: dataset.map(function (d) { return getMaxes(d, 'x'); }),
        y: dataset.map(function (d) { return getMaxes(d, 'y'); }),
        z: dataset.map(function (d) { return getMaxes(d, 'z'); })
      };
    } else {
      maxes = dataset.map(function (d) { return getMaxes(d); });
    }

    var entries = d3.max(dataset.map(function(d){ return d.data.length; })) -1,
      xScale = x.domain([0, isBubble ? d3.max(maxes.x) : entries]).nice(),
      yScale = y.domain([0, d3.max(isBubble ? maxes.y : maxes)]).nice(),
      zScale = z.domain([0, d3.max(isBubble ? maxes.z : maxes)]).nice();

    var xAxis = d3.svg.axis()
      .scale(xScale)
      .orient('bottom')
      .tickSize(isBubble ? -(height + 10) : 0)
      .ticks(isBubble && isViewSmall ? Math.round(entries/2) : entries)
      .tickPadding(10)
      .tickFormat(function (d, i) {
        return isBubble ? d : names[i];
      });

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .tickSize(-(width + 20))
      .tickPadding(20)
      .orient('left');

    //Append The Axis to the svg
    svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);

    svg.append('g')
      .attr('class', 'y axis')
      .call(yAxis);

    //Offset the tick inside, uses the fact that the yAxis has 20 added.
    svg.selectAll('.tick line').attr('x1', '-10');

    if (isBubble) {
      svg.selectAll('.x.axis .tick line, .y.axis .tick line').style('opacity', 0);
      svg.select('.x.axis .tick line').attr('x2', '-10').style('opacity', 1);
      svg.select('.y.axis .tick line').style('opacity', 1);
    }

    // Create the line generator
    var line = d3.svg.line()
      .x(function(d, i) {
        return xScale(isBubble ? d.value.x : i);
      })
      .y(function(d) {
        return yScale(isBubble ? d.value.y : d.value);
      });

    //append the three lines.
    dataset.forEach(function(d, i) {

      var lineGroups = svg.append('g')
        .attr({'data-group-id': i, 'class': 'line-group'});

      if (isArea) {
        var area = d3.svg.area()
          .x(function(d, i) {
            return xScale(i);
          })
          .y0(height)
          .y1(function(d) {
            return yScale(isBubble ? d.value.y : d.value);
          });

        lineGroups.append('path')
          .datum(d.data)
          .attr('fill', function (d) { return charts.chartColor(i, 'line', d); })
          .style('opacity', '.2')
          .attr('class', 'area')
          .attr('d', area);
      }

      var path = lineGroups.append('path')
        .attr('d', line(d.data))
        .attr('stroke', function (d) { return isBubble ? '' : charts.chartColor(i, 'line', d); })
        .attr('stroke-width', 2)
        .attr('fill', 'none')
        .attr('class', 'line')
        .on('click.chart', function(d) {
          charts.selectElement(d3.select(this.parentNode), svg.selectAll('.line-group'), d);
        });

      // Add animation
      var totalLength = path.node().getTotalLength();
      path
        .attr('stroke-dasharray', totalLength + ' ' + totalLength)
        .attr('stroke-dashoffset', totalLength)
        .transition()
          .duration(750)
          .ease('cubic')
          .attr('stroke-dashoffset', 0);

      if (!hideDots) {
          lineGroups.selectAll('circle')
          .data(d.data)
          .enter()
          .append('circle')
          .attr('class', 'dot')
          .attr('cx', function (d, i) { return xScale(isBubble ? d.value.x : i); })
          .attr('cy', function (d) { return yScale(isBubble ? 0 : d.value); })
          .attr('r', (isBubble ? 0 : 5))
          .style('stroke', '#ffffff')
          .style('stroke-width', (isBubble ? 0 : 2))
          .style('fill', function (d) { return charts.chartColor(i, 'line', d); })
          .style('opacity', (isBubble ? '.7' : '1'))
          .on('mouseenter.chart', function(d2) {
            var rect = this.getBoundingClientRect(),
              content = '<p><b>' + d2.name + ' </b> ' + format(d2.value) + '</p>',

              show = function() {
                var size = charts.getTooltipSize(content),
                  x = rect.left - (size.width /2) + 6,
                  y = rect.top - size.height - 18;

                x = isBubble ? ((rect.left + (rect.width /2)) - (size.width /2)) : x;

                if(content !== '') {
                  charts.showTooltip(x, y, content, 'top');
                }
              };

            if (isBubble) {
              content = ''+
                '<div class="chart-swatch" style="min-width: 95px;">'+
                  '<div class="swatch-caption">'+
                    '<span style="background-color:'+ charts.chartColor(i, 'line', d) +';" class="indicator-box"></span>'+
                    '<b>'+ d.name +'</b>'+
                  '</div>';

                var obj = d2;
                for (var key in obj) {
                  if(obj.hasOwnProperty(key)) {
                    if (typeof obj[key] !== 'object') {
                      content += ''+
                        '<div class="swatch-row">'+
                          '<span>'+ labels[key] +'</span>'+
                          '<b>'+ obj[key] +'</b>'+
                        '</div>';
                    } else {
                      var obj2 = obj[key];
                      for (var key2 in obj2) {
                        if(obj2.hasOwnProperty(key2)) {
                          content += ''+
                            '<div class="swatch-row">'+
                              '<span style="text-transform: capitalize;">'+ labels[key][key2] +'</span>'+
                              '<b>'+ formatValue(valueFormatterString[key2], obj2[key2]) +'</b>'+
                            '</div>';
                        }
                      }
                    }
                  }
                }
              content += '</div>';
            }

            if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCache[i]) {
              content = '';
              var runInterval = true;
              tooltipInterval = setInterval(function() {
                if(runInterval) {
                  runInterval = false;
                  tooltipData(function (data) {
                    content = tooltipDataCache[i] = data;
                  });
                }
                if(content !== '') {
                  clearInterval(tooltipInterval);
                  show();
                }
              }, 10);
            } else {
              tooltipData = typeof tooltipData === 'object' ? '' : tooltipData;
              content = tooltipDataCache[i] || tooltipData || d2.tooltip || d.tooltip || content || '';
              show();
            }

            //Circle associated with hovered point
            d3.select(this).attr('r', function (d) { return 2+(isBubble ? zScale(d.value.z) : 5); });
          })
          .on('mouseleave.chart', function() {
            clearInterval(tooltipInterval);
            charts.hideTooltip();
            d3.select(this).attr('r', function (d) { return isBubble ? zScale(d.value.z) : 5; });
          })
          .on('click.chart', function(d) {
            charts.selectElement(d3.select(this.parentNode), svg.selectAll('.line-group'), d);
          });

        if (isBubble) {
          // Add animation
          lineGroups.selectAll('circle')
            .attr('cy', function (d) { return yScale(d.value.y); })
            .transition().duration(750).ease('cubic')
            .attr('r', function (d) { return zScale(d.value.z); });
        }
      }

    });

    var series = dataset.map(function (d) {
      return {name: d.name, selectionObj: svg.selectAll('.line-group'), selectionInverse: svg.selectAll('.line-group'), data: d};
    });

    charts.addLegend(series);
    charts.appendTooltip();

    // Set initial selected
    (function () {
      var selected = 0,
        selector,
        selectorData,

        setSelected = function (node, d, i) {
          if (node.selected && selected < 1) {
            selected++;
            selector = d3.select(svg.selectAll('.line-group')[0][i]);
            selectorData = d;
          }
        };

      dataset.forEach(function(d, i) {
        if (d) {
          setSelected(d, d, i);
        }
      });
      dataset.forEach(function(d, i) {
        if (d || d.data) {
          d.data.forEach(function(d2) {
            setSelected(d2, d, i);
          });
        }
      });

      if (selected > 0) {
        charts.selectElement(selector, svg.selectAll('.line-group'), selectorData);
      }
    })();


    $(container).trigger('rendered');
    return $(container);
  };

  this.Bullet = function(chartData) {
    $(container).addClass('bullet-chart');

    var tooltipInterval,
      tooltipDataCache = [],
      tooltipData = charts.options.tooltip;

    //Append the SVG in the parent area.
    var dataset = chartData,
      noMarkers = false,
      parent = $(container).parent(),
      margin = {top: 30, right: 55, bottom: 35, left: 65},
      width = parent.width() - margin.left - margin.right,
      height = parent.height() - margin.top - margin.bottom - 30; //legend

    var svg = d3.select(container).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
      .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    //Functions Used in the Loop
    function bulletWidth(x) {
      var x0 = x(0);
      return function(d) {
        return Math.abs(x(d) - x0);
      };
    }

    for (var i = 0; i < dataset[0].data.length; i++) {
      var duration = 600,
          barHeight = 25,
          rowData = dataset[0].data[i],
          ranges = rowData.ranges.slice().sort(d3.descending),
          markers = (rowData.markers ? rowData.markers.slice().sort(d3.descending) : []),
          measures = (rowData.measures ? rowData.measures.slice().sort(d3.descending) : []);

      if (markers.length === 0) {
        markers = measures;
        noMarkers = true;
      }

      var g = svg.append('g')
              .attr('class', 'bullet')
              .attr('transform', 'translate(0, ' + (i * (barHeight*3)) + ')');

      //Add Title and Subtitle
      var title = g.append('g');

      var text = title.append('text')
          .attr('class', 'title')
          .attr('dy', '-6px')
          .text(function() { return rowData.title; });

      text.append('tspan')
          .attr('class', 'subtitle')
          .attr('dx', '15px')
          .text(function() { return rowData.subtitle; });

      // Compute the new x-scale.
      var x1 = d3.scale.linear()
          .domain([0, Math.max(ranges[0], markers[0], measures[0])])
          .range([0, width]);

      // Derive width-scales from the x-scales.
      var w1 = bulletWidth(x1);

      // Update the range rects.
      var range = g.selectAll('rect.range')
          .data(ranges);

      range.enter().append('rect')
          .attr('class', function(d, i) { return 'range s' + i; })
          .attr('data-idx', i)
          .attr('width', 0)
          .style('fill', function(d,i) {
            if (chartData[0].barColors) {
              return chartData[0].barColors[i];
            }
          })
          .attr('height', barHeight)
          .on('click', function () {
            var bar = d3.select(this);
            $(container).trigger('selected', [bar, chartData[0].data[bar.attr('data-idx')]]);
          })
          .on('mouseenter', function(d, i) {

            var bar = d3.select(this),
              data = chartData[0].data[bar.attr('data-idx')],
              rect = this.getBoundingClientRect(),
              content = '<p>' + d + '</p>',

              show = function() {
              var size = charts.getTooltipSize(content),
                x = rect.left + rect.width - (size.width/2),
                y = rect.top - size.height + $(window).scrollTop() - 5;

              if(content !== '') {
                charts.showTooltip(x, y, content, 'top');
              }
            };

            if (data.tooltip && data.tooltip[i]) {
              content = data.tooltip[data.tooltip.length - i -1];
            }

            if (tooltipData && typeof tooltipData === 'function' && !tooltipDataCache[i]) {
              content = '';
              var runInterval = true;
              tooltipInterval = setInterval(function() {
                if(runInterval) {
                  runInterval = false;
                  tooltipData(function (data) {
                    content = tooltipDataCache[i] = data;
                  });
                }
                if(content !== '') {
                  clearInterval(tooltipInterval);
                  show();
                }
              }, 10);
            } else {
              tooltipData = typeof tooltipData === 'object' ? '' : tooltipData;
              content = tooltipDataCache[i] || tooltipData || content || '';
              show();
            }

          })
          .on('mouseleave', function() {
            clearInterval(tooltipInterval);
            charts.hideTooltip();
          });


      range.transition()
          .duration(duration)
          .attr('width', w1);

      // Update the measure rects.
      var measure = g.selectAll('rect.measure')
          .data(measures);

      measure.enter().append('rect')
          .attr('class', function(d, i) { return 'measure s' + i; })
          .attr('width', 0)
          .attr('height', 3)
          .style('fill', function(d,i) {
            if (chartData[0].lineColors) {
              return chartData[0].lineColors[i];
            }
          })
          .attr('y', 11);

      measure.transition()
          .duration(duration)
          .attr('width', w1);

      // Update the marker lines.
      var marker = g.selectAll('line.marker')
          .data(markers);

      marker.enter().append('line')
          .attr('class', (noMarkers ? 'hidden' : 'marker'))
          .attr('x1', 0)
          .attr('x2', 0)
          .style('stroke', function(d,i) {
            if (chartData[0].markerColors) {
              return chartData[0].markerColors[i];
            }
          })
          .attr('y1', barHeight / 6)
          .attr('y2', barHeight * 5 / 6);

      marker.transition()
          .duration(duration)
          .attr('x1', x1)
          .attr('x2', x1)
          .attr('y1', barHeight / 6)
          .attr('y2', barHeight * 5 / 6);

      //Difference
      var dif = (markers[0] > measures[0] ? '-' : '+') + Math.abs(markers[0] - measures[0]);

      if (Math.abs(markers[0] - measures[0]) !== 0) {
        marker.enter().append('text')
            .attr('class', 'inverse')
            .attr('text-anchor', 'middle')
            .attr('y', barHeight /2 + 4)
            .attr('dx', '-50px')
            .attr('x', 0)
            .text(dif);
      }

      marker.transition()
          .duration(duration)
          .attr('x', width);  //x1

      // Update the tick groups.
      var tick = g.selectAll('g.tick')
          .data(x1.ticks(8));

      // Initialize the ticks with the old scale, x0.
      var tickEnter = tick.enter().append('g')
          .attr('class', 'tick')
          .attr('transform', 'translate(0,0)')
          .style('opacity', 0);

      tickEnter.append('line')
          .attr('y1', barHeight)
          .attr('y2', barHeight * 7 / 6);

      tickEnter.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', '1.1em')
          .attr('y', barHeight * 7 / 6)
          .text(function (d) {
            return d;
          });

      // Transition the entering ticks to the new scale, x1.
      tickEnter.transition()
          .duration(duration)
          .attr('transform', function (d) {
            return 'translate(' + x1(d) + ',0)';
          })
          .style('opacity', 1);
    }

    //Add Legends
    //charts.addLegend(isStacked ? series);
    charts.appendTooltip();
    $(container).trigger('rendered');

  };

  //Select the element and fire the event, make the inverse selector opace
  this.selectElement = function(elem, inverse, data) {
    var isSelected = elem.node() && elem.classed('is-selected');

    inverse.classed('is-not-selected', false)
      .classed('is-selected', false)
      .classed('is-not-selected', !isSelected);

     elem.classed('is-not-selected', false)
        .classed('is-selected', !isSelected);

    //Fire Events
     $(container).triggerHandler('selected', [elem, (!isSelected ? data : {})]);
  };

  // Make bars to be Selected or Unselected
  this.setSelectedElement = function (o) {
    var s = charts.settings,
      isPositiveNegative = s.type === 'column-positive-negative',
      isTypeHorizontalBar = s.chartType === 'HorizontalBar',
      isTypeColumn = s.chartType === 'Column',
      isTypePie = s.chartType === 'Pie',

      svg = s.svg,
      isSingle = s.isSingle,
      isGrouped = s.isGrouped,
      isStacked = s.isStacked,
      isSingular = s.isSingular,

      taskSelected = (o.task === 'selected'),
      selector = d3.select(o.selector),
      isPositive = selector.classed('positive'),
      ticksX = svg.selectAll('.axis.x .tick'),
      ticksY = svg.selectAll('.axis.y .tick'),
      pnPositiveText = svg.selectAll('.bartext.positive, .target-bartext.positive'),
      pnNegativeText = svg.selectAll('.bartext.negative, .target-bartext.negative'),
      thisGroup = d3.select(o.selector.parentNode),
      thisGroupId = parseInt((thisGroup.node() ? thisGroup.attr('data-group-id') : 0), 10),
      triggerData = [selector[0], o.d, (isGrouped ? thisGroupId : o.i)],
      selectedBars = [];

    ticksX.style('font-weight', 'normal');
    ticksY.style('font-weight', 'normal');
    pnPositiveText.style('font-weight', 'normal');
    pnNegativeText.style('font-weight', 'normal');
    svg.selectAll('.is-selected').classed('is-selected', false);

    // Task make selected
    if (taskSelected) {
      svg.selectAll('.bar, .target-bar').style('opacity', 0.6);

      // By legends only
      if (s.isByLegends) {
        if (isPositiveNegative) {
          s.svg.selectAll(isPositive ?
            '.bar.positive, .target-bar.positive': '.bar.negative, .target-bar.negative')
              .classed('is-selected', true).style('opacity', 1);

          (isPositive ? pnPositiveText : pnNegativeText).style('font-weight', 'bolder');

          svg.selectAll('.bar.is-selected').each(function(d, i) {
            selectedBars.push([d3.select(this)[0], d, i]);
          });
          triggerData.push(selectedBars);
        }
        // Grouped and stacked only -NOT singular-
        else if (isTypeColumn || isTypeHorizontalBar) {
          if (isGrouped || isSingular) {
            s.svg.selectAll('.series-'+ o.i).classed('is-selected', true).style('opacity', 1);
          }
          else {
            thisGroup.classed('is-selected', true)
              .selectAll('.bar').classed('is-selected', true).style('opacity', 1);
          }
          svg.selectAll('.bar.is-selected').each(function(d, i) {
            selectedBars.push([d3.select(this)[0], d, i]);
          });
          triggerData.push(selectedBars);
        }
      }

      // Single and stacked only -NOT grouped-
      else if (isSingular && isStacked && isTypeColumn) {
        selector.classed('is-selected', true).style('opacity', 1);
      }

      // Single or groups only -NOT stacked-
      else if ((isSingle || isGrouped) && !isStacked && (isTypeColumn || isTypeHorizontalBar)) {
        svg.selectAll((isTypeColumn ? '.axis.x' : '.axis.y') +' .tick:nth-child('+ ((isGrouped ? thisGroupId : o.i) + 1) +')')
          .style('font-weight', 'bolder');

        selector.classed('is-selected', true).style('opacity', 1);
        svg.select('.target-bar.series-'+ o.i).style('opacity', 1);
        d3.select(svg.selectAll('.bartext')[0][o.i]).style('font-weight', 'bolder');
        d3.select(svg.selectAll('.target-bartext')[0][o.i]).style('font-weight', 'bolder');

        if (isGrouped || isPositiveNegative) {
          if (!isPositiveNegative) {
            thisGroup.classed('is-selected', true)
              .selectAll('.bar').classed('is-selected', true).style('opacity', 1);
          }

          svg.selectAll('.bar.is-selected').each(function(d, i) {
            selectedBars.push([d3.select(this)[0], d, i]);
          });
          triggerData.push(selectedBars, thisGroup[0]);
        }
      }

      // Stacked Only
      else if (isTypeColumn || isTypeHorizontalBar) {
        svg.selectAll((isTypeColumn ? '.axis.x' : '.axis.y') +' .tick:nth-child('+ (o.i + 1) +')')
          .style('font-weight', 'bolder');

        svg.selectAll('.bar:nth-child('+ (o.i + 1) +')')
          .classed('is-selected', true).style('opacity', 1);

        svg.selectAll('.bar.is-selected').each(function(d, i) {
          selectedBars.push([d3.select(this)[0], d, i]);
        });
        triggerData.push(selectedBars);
      }

      // Pie
      else if (isTypePie) {
        var color = charts.chartColor(o.i, 'pie', o.d.data);
        selector.classed('is-selected', true)
          .style({'stroke': color, 'stroke-width': 0})
          .attr('transform', 'scale(1.025, 1.025)');
      }
    }
    // Task make unselected
    else {
      svg.selectAll('.bar, .target-bar').style('opacity', 1);
      pnPositiveText.style('font-weight', 'bolder');
      pnNegativeText.style('font-weight', 'bolder');

      if(isTypePie) {
        selector.classed('is-selected', false)
          .style('stroke', '#fff')
          .style('stroke-width', '1px')
          .attr('transform', '');
      }
    }

    if (s.isByLegends) {
      s.isByLegends = false;
    }

    if (o.isTrigger) {
      $(o.container).triggerHandler((taskSelected ? 'selected' : 'unselected'), triggerData);
    }
  };

  this.initChartType = function (options) {
    //default
    this.options = options;
    this.redrawOnResize = true;

    if (options.redrawOnResize !== undefined) {
      this.redrawOnResize = options.redrawOnResize;
    }
    if (options.format) {
      this.format = options.format;
    }
    if (options.tooltip) {
      this.tooltip = options.tooltip;
    }
    if (options.legendshow) {
      this.legendshow = options.legendshow;
    }
    if (options.legendformatter) {
      this.legendformatter = options.legendformatter;
    }
    if (options.type === 'pie') {
      this.Pie(options.dataset, false, options);
    }
    if (options.type === 'bar' || options.type === 'bar-stacked') {
      this.HorizontalBar(options.dataset);
    }
    if (options.type === 'bar-normalized') {
      this.HorizontalBar(options.dataset, true);
    }
    if (options.type === 'bar-grouped') {
      this.HorizontalBar(options.dataset, true, false); //dataset, isNormalized, isStacked
    }
    if (options.type === 'column-stacked') {
      this.Column(options.dataset, true);
    }
    if (['column', 'column-grouped', 'column-positive-negative'].indexOf(options.type) > -1) {
      this.Column(options.dataset);
    }
    if (options.type === 'donut') {
      this.Pie(options.dataset, true, options);
    }
    if (options.type === 'sparkline') {
      this.Sparkline(options.dataset, options);
    }
    if (options.type === 'sparkline-dots') {
      this.Sparkline(options.dataset, {isDots: true});
    }
    if (options.type === 'sparkline-peak') {
      this.Sparkline(options.dataset, {isPeakDot: true});
    }
    if (options.type === 'sparkline-dots-n-peak') {
      this.Sparkline(options.dataset, {isDots: true, isPeakDot: true});
    }
    if (options.type === 'sparkline-minmax') {
      this.Sparkline(options.dataset, {isMinMax: true});
    }
    if (options.type === 'sparkline-medianrange') {
      this.Sparkline(options.dataset, {isMedianRange: true});
    }
    if (options.type === 'sparkline-medianrange-n-peak') {
      this.Sparkline(options.dataset, {isMedianRange: true, isPeakDot: true});
    }
    if (options.type === 'line') {
      this.Line(options.dataset, options);
    }
    if (options.type === 'area') {
      this.Line(options.dataset, options, true);
    }
    if (options.type === 'bubble') {
      this.Line(options.dataset, options, false, true);
    }
    if (options.type === 'bullet') {
      this.Bullet(options.dataset, options);
    }
  };

};

//Make it a plugin
$.fn.chart = function(options) {
  return this.each(function() {
    var instance = $.data(this, 'chart'),
      chartInst;

    if (instance) {
      $(window).off('resize.line');
      $(window).off('resize.pie');
      $(window).off('resize.charts load.charts');
      $(this).empty();
    }

    chartInst = new Chart(this, options);
    instance = $.data(this, 'chart', chartInst);
    instance.settings = options;

    if ($.isEmptyObject(chartInst)) {
     return;
    }

    setTimeout(function () {
      chartInst.initChartType(options);
      chartInst.handleResize();
    }, instance ? 0 :300);

  });
};
