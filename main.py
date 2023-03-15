l = ""

def on_button_pressed_a():
    WiFiIoT.send_generic_http(WiFiIoT.httpMethod.GET, "url1", "")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_http_recevid(HTTP_Status_Code, Data):
    global l
    l = WiFiIoT.get_value("xx", Data)
    basic.show_string(WiFiIoT.get_value("yy", l[0]))

    basic.show_string(WiFiIoT.get_value("xx", Data))
WiFiIoT.on_HTTP_recevid(on_http_recevid)
