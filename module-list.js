(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":    			{url:"$H/m/record-list.html",router:1},
        "comeback-email-address-data":     {url:"$H/m/comeback-email-address-data.html",Table:"comeback-email-address",form_module:"comeback-email-address-form",private:1},
        "comeback-email-address-form":     {url:"$H/m/comeback-email-address-form.html",Table:"comeback-email-address",private:1},
        "comeback-item-list-data":     {url:"$H/m/comeback-item-list-data.html",Table:"comeback-item-list",form_module:"comeback-item-list-form",private:1},
        "comeback-item-list-form":     {url:"$H/m/comeback-item-list-form.html",Table:"comeback-item-list",private:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
