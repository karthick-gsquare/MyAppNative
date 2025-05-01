package com.myappnative;

import android.app.Service;
import android.content.Intent;
import android.media.MediaRecorder;
import android.os.Environment;
import android.os.IBinder;
import android.util.Log;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CallRecordingService extends Service {
    private MediaRecorder recorder = null;
    private File outputFile;

    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        try {
            File dir = new File(Environment.getExternalStorageDirectory(), "CallRecords");
            if (!dir.exists()) dir.mkdirs();

            String fileName = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + ".mp4";
            outputFile = new File(dir, fileName);

            recorder = new MediaRecorder();
            recorder.setAudioSource(MediaRecorder.AudioSource.VOICE_COMMUNICATION); // May vary
            recorder.setOutputFormat(MediaRecorder.OutputFormat.MPEG_4);
            recorder.setAudioEncoder(MediaRecorder.AudioEncoder.AAC);
            recorder.setOutputFile(outputFile.getAbsolutePath());

            recorder.prepare();
            recorder.start();

            Log.d("RecordingService", "Recording started: " + outputFile.getAbsolutePath());

        } catch (IOException e) {
            Log.e("RecordingService", "Recording failed", e);
        }

        return START_STICKY;
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (recorder != null) {
            recorder.stop();
            recorder.release();
            recorder = null;
            Log.d("RecordingService", "Recording stopped");
        }
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
