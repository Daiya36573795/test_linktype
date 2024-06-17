// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// =====================================================
// onLoad-Submit()
// =====================================================
// =====================================================
// getYYYYMMDDHHMMSS
// =====================================================
async function logicProcess() {
    var itemId = document.getElementsByName("item_id")[0].value;
    var itemName = document.getElementsByName("item_name")[0].value;
    var amount = document.getElementsByName("amount")[0].value;
    var successUrl = document.getElementsByName("success_url")[0].value;
    var cancelUrl = document.getElementsByName("cancel_url")[0].value;
    var errorUrl = document.getElementsByName("error_url")[0].value;
    var pageconUrl = document.getElementsByName("pagecon_url")[0].value;

    var order = new Order(
         "credit3d2"
        ,"30132"
        ,"115"
        ,"SBPSTESTUSER00001AA"
        ,""
        ,""
        ,"SBPSORDER_" + getYYYYMMDDHHMMSS()
        ,itemId
        ,""
        ,itemName
        ,""
        ,amount
        ,"0"
        ,""
        ,"0"
        ,""
        ,""
        ,""
        ,""
        ,"0"
        ,successUrl
        ,cancelUrl
        ,errorUrl
        ,pageconUrl
        ,""
        ,""
        ,""
        ,""
        ,getYYYYMMDDHHMMSS()
        ,"9999"
        ,"d84bb8b0b3c80b3f2cae012939483e29ff7a18fa"
        ,[]
        ,""
        ,""
    );
    order.setOrderDetail(
             "1"
            ,itemId
            ,itemName
            ,"1"
            ,""
            ,amount
            ,""
            ,""
            ,""
    );
    

    encryptWithSHA1(order.toString()).then(encrypted => {
        const postUrl = 'https://stbfep.sps-system.com/f01/FepBuyInfoReceive.do';
        order.sps_hashcode = encrypted;
        var form = document.createElement('form');
        form.action = postUrl;
        form.method = "POST";
        form.acceptCharset = "shift-jis";
        form.hidden = true;
        document.body.append(form);
        form.addEventListener('formdata', (e) => {
            var fd = e.formData;
            fd.set('pay_method'        ,order.pay_method       );
            fd.set('merchant_id'       ,order.merchant_id      );
            fd.set('service_id'        ,order.service_id       );
            fd.set('cust_code'         ,order.cust_code        );
            fd.set('sps_cust_no'       ,order.sps_cust_no      );
            fd.set('sps_payment_no'    ,order.sps_payment_no   );
            fd.set('order_id'          ,order.order_id         );
            fd.set('item_id'           ,order.item_id          );
            fd.set('pay_item_id'       ,order.pay_item_id      );
            fd.set('item_name'         ,order.item_name        );
            fd.set('tax'               ,order.tax              );
            fd.set('amount'            ,order.amount           );
            fd.set('pay_type'          ,order.pay_type         );
            fd.set('auto_charge_type'  ,order.auto_charge_type );
            fd.set('service_type'      ,order.service_type     );
            fd.set('div_settele'       ,order.div_settele      );
            fd.set('last_charge_month' ,order.last_charge_month);
            fd.set('camp_type'         ,order.camp_type        );
            fd.set('tracking_id'       ,order.tracking_id      );
            fd.set('terminal_type'     ,order.terminal_type    );
            fd.set('success_url'       ,order.success_url      );
            fd.set('cancel_url'        ,order.cancel_url       );
            fd.set('error_url'         ,order.error_url        );
            fd.set('pagecon_url'       ,order.pagecon_url      );
            fd.set('free1'             ,order.free1            );
            fd.set('free2'             ,order.free2            );
            fd.set('free3'             ,order.free3            );
            fd.set('free_csv'          ,order.free_csv         );
            fd.set('dtl_rowno'         ,order.orderDetail[0].dtl_rowno      );
            fd.set('dtl_item_id'       ,order.orderDetail[0].dtl_item_id    );
            fd.set('dtl_item_name'     ,order.orderDetail[0].dtl_item_name  );
            fd.set('dtl_item_count'    ,order.orderDetail[0].dtl_item_count );
            fd.set('dtl_tax'           ,order.orderDetail[0].dtl_tax        );
            fd.set('dtl_amount'        ,order.orderDetail[0].dtl_amount     );
            fd.set('dtl_free1'         ,order.orderDetail[0].dtl_free1      );
            fd.set('dtl_free2'         ,order.orderDetail[0].dtl_free2      );
            fd.set('dtl_free3'         ,order.orderDetail[0].dtl_free3      );
            fd.set('request_date'      ,order.request_date     );
            fd.set('limit_second'      ,order.limit_second     );
            fd.set('sps_hashcode'      ,order.sps_hashcode     );
            fd.set('hashkey'           ,order.hashkey          );
        });
        
        const orderMessage = {
          pay_method: order.pay_method,
          merchant_id: order.merchant_id,
          service_id: order.service_id,
          cust_code: order.cust_code,
          sps_cust_no: order.sps_cust_no,
          sps_payment_no: order.sps_payment_no,
          order_id: order.order_id,
          item_id: order.item_id,
          pay_item_id: order.pay_item_id,
          item_name: order.item_name,
          tax: order.tax,
          amount: order.amount,
          pay_type: order.pay_type,
          auto_charge_type: order.auto_charge_type,
          service_type: order.service_type,
          div_settele: order.div_settele,
          last_charge_month: order.last_charge_month,
          camp_type: order.camp_type,
          tracking_id: order.tracking_id,
          terminal_type: order.terminal_type,
          success_url: order.success_url,
          cancel_url: order.cancel_url,
          error_url: order.error_url,
          pagecon_url: order.pagecon_url,
          free1: order.free1,
          free2: order.free2,
          free3: order.free3,
          free_csv: order.free_csv,
          dtl_rowno: order.orderDetail[0].dtl_rowno,
          dtl_item_id: order.orderDetail[0].dtl_item_id,
          dtl_item_name: order.orderDetail[0].dtl_item_name,
          dtl_item_count: order.orderDetail[0].dtl_item_count,
          dtl_tax: order.orderDetail[0].dtl_tax,
          dtl_amount: order.orderDetail[0].dtl_amount,
          dtl_free1: order.orderDetail[0].dtl_free1,
          dtl_free2: order.orderDetail[0].dtl_free2,
          dtl_free3: order.orderDetail[0].dtl_free3,
          request_date: order.request_date,
          limit_second: order.limit_second,
          sps_hashcode: order.sps_hashcode,
          hashkey: order.hashkey
        };

        flutterApp.postMessage(JSON.stringify(orderMessage));
        
        form.submit();
    });
}
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// *****************************************************
// Common Function
// =====================================================
// getYYYYMMDDHHMMSS
// =====================================================
function getYYYYMMDDHHMMSS() {
    const now = new Date();
    return now.getUTCFullYear() + zeroPadding(now.getUTCMonth() + 1) + zeroPadding(now.getUTCDate()) +
           zeroPadding(now.getUTCHours()) + zeroPadding(now.getUTCMinutes()) + zeroPadding(now.getUTCSeconds());
}
// =====================================================
// zeroPadding
// =====================================================
function zeroPadding(num) {
    return (num < 10 ? "0" + num : num.toString());
}
// =====================================================
// encryptWithSHA1
// =====================================================
async function encryptWithSHA1(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    return hashHex;
};
// *****************************************************
// Common Object
// =====================================================
// Order Object
// =====================================================
class Order {
    constructor(
         pay_method
        ,merchant_id
        ,service_id
        ,cust_code
        ,sps_cust_no
        ,sps_payment_no
        ,order_id
        ,item_id
        ,pay_item_id
        ,item_name
        ,tax
        ,amount
        ,pay_type
        ,auto_charge_type
        ,service_type
        ,div_settele
        ,last_charge_month
        ,camp_type
        ,tracking_id
        ,terminal_type
        ,success_url
        ,cancel_url
        ,error_url
        ,pagecon_url
        ,free1
        ,free2
        ,free3
        ,free_csv_input
        ,request_date
        ,limit_second
        ,hashkey
        ,orderDetail
        ,free_csv
        ,sps_hashcode
    ){
        this.pay_method        = pay_method         ;
        this.merchant_id       = merchant_id        ;
        this.service_id        = service_id         ;
        this.cust_code         = cust_code          ;
        this.sps_cust_no       = sps_cust_no        ;
        this.sps_payment_no    = sps_payment_no     ;
        this.order_id          = order_id           ;
        this.item_id           = item_id            ;
        this.pay_item_id       = pay_item_id        ;
        this.item_name         = item_name          ;
        this.tax               = tax                ;
        this.amount            = amount             ;
        this.pay_type          = pay_type           ;
        this.auto_charge_type  = auto_charge_type   ;
        this.service_type      = service_type       ;
        this.div_settele       = div_settele        ;
        this.last_charge_month = last_charge_month  ;
        this.camp_type         = camp_type          ;
        this.tracking_id       = tracking_id        ;
        this.terminal_type     = terminal_type      ;
        this.success_url       = success_url        ;
        this.cancel_url        = cancel_url         ;
        this.error_url         = error_url          ;
        this.pagecon_url       = pagecon_url        ;
        this.free1             = free1              ;
        this.free2             = free2              ;
        this.free3             = free3              ;
        this.free_csv_input    = free_csv_input     ;
        this.request_date      = request_date       ;
        this.limit_second      = limit_second       ;
        this.hashkey           = hashkey            ;
        this.orderDetail       = orderDetail        ;
        this.free_csv          = free_csv           ;
        this.sps_hashcode      = sps_hashcode       ;
    }
    setOrderDetail(
        dtl_rowno       ,
        dtl_item_id     ,
        dtl_item_name   ,
        dtl_item_count  ,
        dtl_tax         ,
        dtl_amount      ,
        dtl_free1       ,
        dtl_free2       ,
        dtl_free3
    ){
        let tmp = new OrderDetail(
            dtl_rowno      ,
            dtl_item_id    ,
            dtl_item_name  ,
            dtl_item_count ,
            dtl_tax        ,
            dtl_amount     ,
            dtl_free1      ,
            dtl_free2      ,
            dtl_free3
        );
        this.orderDetail.push(tmp);
    }
    toString() {
        var resultOrderDetail = "";
        for (var i = 0; i < this.orderDetail.length; i++) {
            resultOrderDetail = resultOrderDetail + this.orderDetail[i].toString();
        }
        var result =
            this.pay_method +
            this.merchant_id +
            this.service_id +
            this.cust_code +
            this.sps_cust_no +
            this.sps_payment_no +
            this.order_id +
            this.item_id +
            this.pay_item_id +
            this.item_name +
            this.tax +
            this.amount +
            this.pay_type +
            this.auto_charge_type +
            this.service_type +
            this.div_settele +
            this.last_charge_month +
            this.camp_type +
            this.tracking_id +
            this.terminal_type +
            this.success_url +
            this.cancel_url +
            this.error_url +
            this.pagecon_url +
            this.free1 +
            this.free2 +
            this.free3 +
            this.free_csv +
            resultOrderDetail +
            this.request_date +
            this.limit_second +
            this.hashkey;
        return result;
    }
};
// =====================================================
// Order Detail Object
// =====================================================
class OrderDetail {
    constructor(
         dtl_rowno
        ,dtl_item_id
        ,dtl_item_name
        ,dtl_item_count
        ,dtl_tax
        ,dtl_amount
        ,dtl_free1
        ,dtl_free2
        ,dtl_free3
    ){
        this.dtl_rowno       = dtl_rowno       ;
        this.dtl_item_id     = dtl_item_id     ;
        this.dtl_item_name   = dtl_item_name   ;
        this.dtl_item_count  = dtl_item_count  ;
        this.dtl_tax         = dtl_tax         ;
        this.dtl_amount      = dtl_amount      ;
        this.dtl_free1       = dtl_free1       ;
        this.dtl_free2       = dtl_free2       ;
        this.dtl_free3       = dtl_free3       ;
    };
    toString() {
        var result =
            this.dtl_rowno +
            this.dtl_item_id +
            this.dtl_item_name +
            this.dtl_item_count +
            this.dtl_tax +
            this.dtl_amount +
            this.dtl_free1 +
            this.dtl_free2 +
            this.dtl_free3;
        return result;
    }
};
// *****************************************************
