package com.myappnative;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.telephony.TelephonyManager;
import android.util.Log;

public class CallReceiver extends BroadcastReceiver {
    private static boolean recording = false;

    @Override
    public void onReceive(Context context, Intent intent) {
        String state = intent.getStringExtra(TelephonyManager.EXTRA_STATE);

        if (state == null) return;

        if (state.equals(TelephonyManager.EXTRA_STATE_OFFHOOK)) {
            Log.d("CallReceiver", "Call started");
            Intent serviceIntent = new Intent(context, CallRecordingService.class);
            context.startForegroundService(serviceIntent);
            recording = true;
        } else if (state.equals(TelephonyManager.EXTRA_STATE_IDLE) && recording) {
            Log.d("CallReceiver", "Call ended");
            context.stopService(new Intent(context, CallRecordingService.class));
            recording = false;
        }
    }
}
