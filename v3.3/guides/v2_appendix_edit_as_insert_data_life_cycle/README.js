Ext.data.JsonP.v2_appendix_edit_as_insert_data_life_cycle({"guide":"<h1 id='v2_appendix_edit_as_insert_data_life_cycle-section-edit-as-insert-data-life-cycle'>Edit as Insert Data Life Cycle</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/v2_appendix_edit_as_insert_data_life_cycle-section-function-order-overview'>Function Order Overview</a></li>\n<li><a href='#!/guide/v2_appendix_edit_as_insert_data_life_cycle-section-functions-in-detail'>Functions in Detail</a></li>\n<li><a href='#!/guide/v2_appendix_edit_as_insert_data_life_cycle-section-properties'>Properties</a></li>\n</ol>\n</div>\n\n<p>This topic will cover creating a new record via Edit as Insert. The Edit View is a dual-purpose in that in serves as creating new records as well as updating existing records, both have unique data flows and properties.</p>\n\n<p>To signify we are inserting when creating the navigation options in the previous view add <code>insert: true</code>. This will then be stored into <code>this.inserting</code> of the Edit view.</p>\n\n<h2 id='v2_appendix_edit_as_insert_data_life_cycle-section-function-order-overview'>Function Order Overview</h2>\n\n<ul>\n<li><code>show(options, transition options)</code></li>\n<li><code>onShow()</code></li>\n<li><code>refreshRequiredFor(options)</code></li>\n<li><code>getTag()</code></li>\n<li><code>getContext()</code></li>\n<li><code>ReUI.show()</code></li>\n<li><code>load()</code></li>\n<li><code>App._beforeViewTransitionTo(view)</code></li>\n<li><code>onBeforeTransitionTo()</code></li>\n<li>Transition happens</li>\n<li><code>App._viewTransitionTo()</code></li>\n<li><code>getTools()</code></li>\n<li><code>createToolLayout()</code></li>\n<li><code>transitionTo()</code></li>\n<li><code>refresh()</code></li>\n<li><code>clearValues()</code></li>\n<li><code>requestTemplate()</code></li>\n<li><code>createTemplateRequest()</code></li>\n<li><code>onTransitionTo()</code></li>\n<li>Navigation state applied and saved</li>\n<li><code>onRequestTemplateSuccess()</code></li>\n<li><code>processTemplateEntry(template)</code></li>\n<li><code>convertEntry(template)</code></li>\n<li><code>setValues(values)</code></li>\n<li><code>applyFieldDefaults()</code></li>\n<li><code>applyContext()</code></li>\n</ul>\n\n\n<h2 id='v2_appendix_edit_as_insert_data_life_cycle-section-functions-in-detail'>Functions in Detail</h2>\n\n<ul>\n<li><p><code>show(options, transition options)</code> - show is called with the navigation options, first it fires <code>onShow()</code> then checks to see if <code>refreshRequiredFor(options)</code> is true and sets <code>this.refreshRequired = true</code> if it is. Then it saves the nav options to <code>this.options</code> and sets the title bar to <code>options.title</code> if present. Lastly it calls <code>ReUI.show()</code> passing the transition options. <code>this.getTag()</code> and <code>this.getContext()</code>.</p></li>\n<li><p><code>onShow()</code> - fired.</p></li>\n<li><p><code>refreshRequiredFor(options)</code> - If options were passed it returns true - unless the <code>options.key</code> matches <code>this.options.key</code> in which case it returns false.</p></li>\n<li><p><code>getTag()</code> - returns empty.</p></li>\n<li><p><code>getContext()</code> - returns an object with resourceKind set to <code>this.resourceKind</code>, insert set to <code>true</code> and key set to false.</p></li>\n<li><p><code>ReUI.show()</code> - ReUI will now handle the transition.</p></li>\n<li><p><code>load()</code> - fires.</p></li>\n<li><p><code>App._beforeViewTransitionTo(view)</code> this is at the Application (window.App) level and it handles calling the before transition functions and it clears out all the toolbars.</p></li>\n<li><p><code>onBeforeTransitionTo()</code> is fired, since <code>this.options.inserting</code> is true it will add the <code>panel-loading</code> class to the View which shows a spinner.</p></li>\n<li><p>ReUI applies CSS transition effect</p></li>\n<li><p><code>App._viewTransitionTo()</code> - handles all ReUI transitionTos and first gets the tools from a) view.options.tools or from view.getTools() or sets to blank {}. The tools are then passed to each toolbar by calling the toolbars showTools(tools) function.</p></li>\n<li><p><code>getTools()</code> - this calls this.createToolLayout() and passes the result to the customization engine for the tools header.</p></li>\n<li><p><code>createToolLayout()</code> - this should define and return this.tools which is an object where the keys are the names of the toolbars and the values are array of toolbar item definitions.</p></li>\n<li><p><code>transitionTo()</code> - the transition effect has now finished and you will see an empty Detail screen. This functions checks if this.refreshRequired is true and if it is, sets it to false and calls this.refresh().</p></li>\n<li><p><code>refresh()</code> - All the magic happens here for Edit views. First it clears the following properties:</p>\n\n<ul>\n<li><code>this.entry</code>;</li>\n<li><code>this.changes</code>;</li>\n<li><code>this.inserting</code> - to <code>this.options.insert</code> or false; and</li>\n<li>calls <code>clearValues()</code> which loops through all the <code>this.fields</code> and calls there <code>field.clearValue()</code>.</li>\n</ul>\n\n\n<p> Since we are inserting it then checks to see if <code>this.options.template</code> is defined. If it is then <code>processTemplateEntry</code> is immediately called with the passed template. If not then <code>requestTemplate</code> is called.</p></li>\n<li><p><code>requestTemplate()</code> - creates a request via <code>this.createTemplateRequest()</code> and calls <code>request.read()</code> sending success to <code>onRequestTemplateSuccess</code> and failures to <code>onRequestTemplateFailure</code>.</p></li>\n<li><p><code>createTemplateRequest()</code> - an <code>Sage.SData.Client.SDataTemplateResourceRequest</code> is created using the following properties:</p>\n\n<ul>\n<li><code>this.resourceKind</code> => <code>request.setResourceKind</code></li>\n<li><code>this.querySelect</code> => <code>request.setQueryArg</code></li>\n<li><code>this.queryInclude</code> => <code>request.setQueryArg</code></li>\n</ul>\n</li>\n<li><p><code>onTransitionTo()</code> - fires</p></li>\n<li><p>Navigation state is cleaned up and saved to local storage</p></li>\n<li><p><code>onRequestTemplateSuccess()</code> - is passed with the template and simple passes it on to <code>processTemplateEntry</code>, meeting up with if we had passed a template via navigation options.</p></li>\n<li><p><code>processTemplateEntry(template)</code> - first it calls <code>convertEntry(template)</code> and saves it to <code>this.templateEntry</code> then it calls <code>setValues(templateEntry)</code>, then <code>applyFieldDefaults()</code>, next <code>applyContext()</code>, and lastly it checks to see if <code>this.options.changes</code> is defined and calls <code>setValues(changes)</code>. It also removes the <code>panel-loading</code> class defined earlier once all values are set.</p></li>\n<li><p><code>convertEntry(template)</code> - this loops over the entry and converts any stringified dates to a javascript date object.</p></li>\n<li><p><code>setValues(values)</code> - it loops over the <code>this.fields</code> if the field is hidden (by checking <code>field.isHidden()</code>) it is skipped. If a field has <code>applyTo</code> defined it tries to get the <code>applyTo</code> property out of the supplied <code>values</code>, else it tries the <code>field.property</code> (or <code>field.name</code> if property is not defined). If a value is found it is then applied to the field via <code>field.setValue(value, true)</code> meaning it is an initial - \"clean\" value.</p></li>\n<li><p><code>applyFieldDefaults()</code> - loops over the fields again checking to see if the field has <code>\"default\"</code> defined and if it does, apply it to the field via <code>field.setValue(defaultValue, true)</code>.</p></li>\n<li><p><code>applyContext()</code> - empty, but an Edit view will typically provide this function and query the navigation history to see if the previous view has data that would apply to this view.</p></li>\n<li><p>Edit View is now finished loading and is fully interactive.</p></li>\n</ul>\n\n\n<h2 id='v2_appendix_edit_as_insert_data_life_cycle-section-properties'>Properties</h2>\n\n<ul>\n<li><code>this.fields</code> - object where each key is a fields <code>name</code> and the value being the corresponding field.</li>\n<li><code>this.options</code> - the navigation options, where you will find <code>entry</code>, <code>template</code>, <code>changes</code>, <code>insert</code>, and other values to base decisions off of.</li>\n<li><code>this.templateEntry</code> - if a template was requested it will be stored here.</li>\n<li><code>this.domNode</code> - the main <code>&lt;div&gt;</code> element of the Edit View.</li>\n</ul>\n\n","title":"Edit as Insert Life Cycle"});