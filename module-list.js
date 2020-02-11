(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "panel-main":    			{url:"$H/m/record-list.html",router:1},
        "comeback-email-address-data":     {url:"$H/m/comeback-email-address-data.html",Table:"comeback-email-address",form_module:"comeback-email-address-form",private:1},
        "comeback-email-address-form":     {url:"$H/m/comeback-email-address-form.html",Table:"comeback-email-address",private:1},
        "comeback-charge-list-data":     {url:"$H/m/comeback-charge-list-data.html",Table:"comeback-charge-list",form_module:"comeback-charge-list-form",private:1},
        "comeback-charge-list-form":     {url:"$H/m/comeback-charge-list-form.html",Table:"comeback-charge-list",private:1},
        "comeback-order-data":     {url:"$H/m/comeback-order-data.html",Table:"comeback-order",form_module:"comeback-order-form",private:1},
        "comeback-order-form":     {url:"$H/m/comeback-order-form.html",Table:"comeback-order",private:1},
        "comeback-items-data":     {url:"$H/m/comeback-items-data.html",Table:"comeback-items",form_module:"comeback-items-form",private:1},
        "comeback-items-form":     {url:"$H/m/comeback-items-form.html",Table:"comeback-items",private:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p]; 
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
