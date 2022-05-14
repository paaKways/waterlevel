/*
 ESP based Internet of Things starter template 
 Out of box integration with 
 github.com/paakways/amatech_planthouse.git - 2018
*/

#include <PubSubClient.h>
#include <ESP8266WiFi.h>
#include <ArduinoJson.h>

WiFiClient espClient;
PubSubClient client(espClient);

/*
* WiFi and MQTT server connection details.
*/
const char* ssid = "Place your wifi's name here";
const char* password = "Place your wifi's password here";
const char* mqtt_addr = "Place your cloudmqtt url here.. eg. m10.cloudmqtt.com";
const int mqtt_port = 14880 // Replace with MQTT port provided by cloudmqtt;
const char* mqtt_user = "Cloud mqtt connection user name";
const char* mqtt_pass = "Cloud mqtt connection password";
const char*

long lastMsg = 0;
char msg[50];
int value = 0;


void setup() 
{
  Serial.begin(115200);
  
  setup_wifi();
  client.setServer(mqtt_addr,mqtt_port);
  client.setCallback(callback); //Listen for any published message.
  
  //Rest of the setup code goes here
}

// the loop function runs over and over again forever
void loop() 
{
  StaticJsonBuffer<300> JSONbuffer;
  JsonObject& JSONencoder = JSONbuffer.createObject();

  // Extract Sensor data here

  // End - Extract sensor data

	
  // Package for sending
  JSONencoder["soilTemp"] = soilTemperature;

  /*Package as JSON object*/
  char JSONmessageBuffer[200];
  JSONencoder.printTo(JSONmessageBuffer, sizeof(JSONmessageBuffer));


  
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
    digitalWrite(wifi_led,LOW);
    
    delay(500);
    Serial.print(".");
  }
  
  // Turn ON 'WiFi connected' indicator to show connection
  digitalWrite(wifi_led,HIGH);
  
  //Show connected status
  Serial.println("");
  Serial.print("Connected to ");
  Serial.print(ssid);
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