WiFiIoT.on_wifi_connect(function (IP_Address, Device_ID) {
    basic.showString(IP_Address)
})
input.onButtonPressed(Button.A, function () {
    WiFiIoT.sendGenericHttp(
    WiFiIoT.httpMethod.GET,
    "api1",
    ""
    )
})
WiFiIoT.on_HTTP_recevid(function (HTTP_Status_Code, Data) {
    l = WiFiIoT.get_value("feeds", Data)
    basic.showString(WiFiIoT.get_value("field1", l[0]))
})
let l = ""
WiFiIoT.initializeWifi(SerialPin.P12, SerialPin.P8)
WiFiIoT.setWifi("Ooredoo 4G_DAE", "21554265")
