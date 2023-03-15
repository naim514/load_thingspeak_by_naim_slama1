let l = ""
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
