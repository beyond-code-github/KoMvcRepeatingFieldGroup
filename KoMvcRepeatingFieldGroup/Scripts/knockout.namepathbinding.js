ko.bindingHandlers.namePath = {
    init: function (element, valueAccessor, allBindingsAccessor, viewModel) {

        var jElement = $(element);
        var parent = $(element).parents("fieldset")[0];
        var parentIndex = $(parent).index() - 1;
        
        if (valueAccessor()) {
            
            var name = jElement.attr("name");
            var modifiedPath = name.replace("[0]", "[" + parentIndex + "]");
            element.name = modifiedPath;

            var id = jElement.attr("id");
            var modifiediD = id.replace("_0_", "_" + parentIndex + "_");
            element.id = modifiediD;

            // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
            if (ko.utils.isIe6 || ko.utils.isIe7)
                element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
        }

        // Fix data-valmsg-for on labels to match
        $(element).parent().find(".field-validation-valid").each(function () {
            var item = $(this);
            var data = item.data();
            var modifiedValPath = data.valmsgFor.replace("[0]", "[" + parentIndex + "]");
            item.attr("data-valmsg-for", modifiedValPath);
        });
    }
};