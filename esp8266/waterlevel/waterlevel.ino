/*
* ESP based Internet of Things starter template 
* https://github.com/paaKways/waterlevel/blob/timothy/esp8266/sketch.ino
*/
#include <HCSR04.h>
#include <PubSubClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>
#include <TinyGPS.h>
#include <SoftwareSerial.h>

HCSR04 hc(13, 12); // Initialize Pin D7, D6
WiFiClient espClient;
PubSubClient client(espClient);

SoftwareSerial gpsSerial(0,4); // D3, D2
TinyGPS gps;

/*
* WiFi and MQTT server connection details.
*/
const char* ssid = "waterlevel";
const char* password = "waterlevel";
const char* mqtt_addr = "m10.cloudmqtt.com"; // Place your cloudmqtt url here.. eg. m10.cloudmqtt.com
const int mqtt_port = 15587; // Replace with MQTT port provided by cloudmqtt;
const char* mqtt_user = "uzyenhei";
const char* mqtt_pass = "otG6lNz-TTnx";

float latit = 5.6078,longit = -0.0598;
void setup() 
{ 
  Serial.begin(115200);
  
  setup_wifi();
  client.setServer(mqtt_addr,mqtt_port);
  client.setCallback(callback); //Listen for any published message.
  
  //Rest of the setup code goes here
  gpsSerial.begin(115200);
}

// the loop function runs over and over again forever
void loop() 
{
  StaticJsonDocument<300> JSONdoc;

  // Extract Sensor data here
  while(gpsSerial.available()){
    if(gps.encode(gpsSerial.read()))
     { 
       gps.f_get_position(&latit, &longit); 
     } 
  }
  String latitude = String(latit, 6);
  String longitude = String(longit, 6);
  
  
  // End - Extract sensor data

  
  // Package for sending
  JSONdoc["levelcm"] = hc.dist();

  JSONdoc["lat"] = latitude;
  JSONdoc["long"] = longitude;

  /*Package as JSON object*/
   char JSONMessageBuffer[200];
   serializeJson(JSONdoc, JSONMessageBuffer);
  
  if(!client.connected())
  {
    reconnect();
  }
  client.loop(); //Runs the callback fxn

  // Your code goes here.
  

  /*
   * To send to server, use
   * client.publish(topic, value);
  */
  Serial.println("Publishing data ..");
  Serial.println(JSONMessageBuffer);
  client.publish("waterLevelValue", JSONMessageBuffer);
  
  // wait 5 seconds before sending to server
  delay(5000);
}


/** 
 ** Try to reconnect in case of connection failure.
 **/
 
void reconnect() {
  
  while(!client.connected()){
    
    Serial.print("Attempting to connect to MQTT server...");
    
    // Create random client ID
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    
     //Attempt to connect
      if( client.connect( clientId.c_str(), mqtt_user, mqtt_pass) ){
      
        Serial.println("Connected!");
        
      // Subscribe to topic here if necessary
      
      }else{
        Serial.print("Failed, rc=");
        Serial.print(client.state());
        Serial.println("Try again in 5 secs");
        delay(5000);
        
        }
    }
}

/** 
 ** Connect to WiFi 
 **/

void setup_wifi(){
  delay(10);

  //Try to connect to WiFi
  Serial.println();
  Serial.print("Connecting to WiFi Access Point (SSID):");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);

  //While not connected
  while( WiFi.status() != WL_CONNECTED ){
    // Turn OFF 'WiFi connected' indicator to show disconnection
    // digitalWrite(wifi_led,LOW);
    
    delay(500);
    Serial.print(".");
  }
  
  // Turn ON 'WiFi connected' indicator to show connection
  //  digitalWrite(wifi_led,HIGH);
  
  //Show connected status
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}


/** 
 ** Listening for callback to MQTT messages 
 **/
void callback(char* topic, byte* payload, unsigned int length){
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  
  for(int i = 0; i < length; i++){
    Serial.print((char) payload[i]);
    }
  Serial.println();
  // Subscribe to topic here if necessary
}
