package com.spotifysearcher; // replace com.your-app-name with your app’s name
import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class ConnectionStatusModuleManager extends ReactContextBaseJavaModule {

 private ConnectivityManager cm;

 public ConnectionStatusModuleManager (ReactApplicationContext reactContext) {
  super(reactContext);
  cm = (ConnectivityManager) reactContext.getSystemService(Context.CONNECTIVITY_SERVICE);
 }

 @Override
 public String getName() {
  return "ConnectionStatusModule";
 }

 @ReactMethod
 public void checkConnectionStatus(Callback callback) {
  String name = "sin conexion a internet";
  boolean connected = false;
  if (cm != null && cm.getActiveNetworkInfo() != null && cm.getActiveNetworkInfo().isAvailable() && cm.getActiveNetworkInfo().isConnected()) {
   connected = true;
   name = "conectado";
  }
  callback.invoke(name,connected);
 }
}