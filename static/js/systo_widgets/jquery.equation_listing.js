(function ($) {

  /***********************************************************
   *         equation_listing widget
   ***********************************************************
   */
    $.widget('systo.equation_listing', {

        meta: {
            short_description: 'Listing of all the equations in the specified model.',
            long_description: '<p>This is a very basic widget (and quite a good one to look at if you '+
            'want to get a feel for how a widget is put together).</p>'+
            '<p>It lists, in tabular form, all the variables inthe model, and gives the equation for '+
            'each one.</p>'+
            '<p>There is plenty of scope for a much-improved equation listing. One nice feature would be '+
            'to have each variable in each equation act as a hyperlink, so that clicking on it would take '+
            'you to where that variable is defined.</p>',
            author: 'Robert Muetzelfeldt',
            last_modified: 'Sept 2014',
            visible: true,
            listeners: ['change_model_listener'],
            options: {
                modelId: {
                    description: 'The ID of the model whose equations are listed.',
                    type: 'string (model ID)',
                    default: 'null'
                },
                packageId: {
                    description: 'The ID of the package this widget belongs to',
                    type: 'string (package ID)',
                    default: 'package1'
                }
            }
        },

        options: {
            modelId:'',
            packageId: 'package1'
        },

        widgetEventPrefix: 'equation_listing:',

        _create: function () {
            var self = this;
            this.element.addClass('equation_listing-1');

            var div = $('<div style="height:100%; overflow:y:auto; background-color:white;"></div>');

            var equationsDiv = $(getEquations(SYSTO.models[this.options.modelId]));
            $(div).append(equationsDiv);
            equationsDiv.css({'max-height':'100%','overflow':'auto','table-layout':'fixed'});

            //$('.equation_row:even').css('background-color','yellow');
            //$('.equation_row:odd').css('background-color','green');


            $(document).on('equation_listener', {}, function(event, parameters) {
                if (!parameters.packageId || self.options.packageId === parameters.packageId) {
                    console.debug('equation_listing: parameters:'+parameters.packageId+' ===  options:' + self.options.packageId);
                    $(div).find('.table_div').remove();
                    var equationsDiv = $(getEquations(SYSTO.models[parameters.modelId]));
                    $(div).append(equationsDiv);
                    equationsDiv.css({'max-height':'100%','overflow':'auto','table-layout':'fixed'});
                }
            });

            $(document).on('change_model_listener', {}, function(event, parameters) {
                if (!parameters.packageId || self.options.packageId === parameters.packageId) {
                    console.debug('equation_listing: parameters:'+parameters.packageId+' ===  options:' + self.options.packageId);
                    var oldModelId = parameters.oldModelId;
                    var newModelId = parameters.newModelId;
                    $(div).find('.table_div').remove();
                    var equationsDiv = $(getEquations(SYSTO.models[newModelId]));
                    $(div).append(equationsDiv);
                    equationsDiv.css({'max-height':'100%','overflow':'auto','table-layout':'fixed'});
                }
            });
 
            this._container = $(this.element).append(div);

            this._setOptions({
            });
        },

        _destroy: function () {
            this.element.removeClass('equation_listing-1');
            this.element.empty();
            this._super();
        },
        _setOption: function (key, value) {
            var self = this;
            var prev = this.options[key];
            var fnMap = {
            };

            // base
            this._super(key, value);

            if (key in fnMap) {
                fnMap[key]();

                // Fire event
                this._triggerOptionChanged(key, prev, value);
            }
        },

        _triggerOptionChanged: function (optionKey, previousValue, currentValue) {
            this._trigger('setOption', {type: 'setOption'}, {
                option: optionKey,
                previous: previousValue,
                current: currentValue
            });
        }
    });


function getEquations(model) {

    var nodeList = model.nodes;

    array = [];

    for (var nodeId in nodeList) {
        var node = nodeList[nodeId];
        if (node.type === 'cloud') continue;
        equation = node.extras.equation.value;
        array.push({label:node.label, equation:equation});
    }
    
    array.sort(function(a,b) {
        alower = a.label.toLowerCase();
        blower = b.label.toLowerCase();
        if (alower < blower)
            return -1;
        if (alower > blower)
            return 1;
        return 0;
        });

    var html = '<div class="table_div" style="max-height:100%; overflow:auto; table-layout: fixed; margin-bottom:0px;"><table style="height:100%; overflow:auto; table-layout: fixed; word-break: break-all; word-wrap: break-word; margin-bottom:20px;">';
    for (var i=0; i<array.length; i++) {
        html += 
            '<tr class="equation_row">'+
                '<td style="font-size:13px; vertical-align:top; min-width:130px;"><b>'+array[i].label+'</b></td>'+
                '<td style="font-size:13px; vertical-align:top;"> = </td>'+
                '<td style="font-size:13px; vertical-align:top;">'+array[i].equation+'</td>'+
            '</tr>';
    }
    html += '</table></div>';
    return $(html);
}


})(jQuery);
