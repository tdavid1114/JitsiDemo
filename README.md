To run the application:

1. Open a command prompt.
2. Navigate to the /JitsiDemo/MedicalScanJitsi directory.
3. Execute the 'nmp install' and 'ng serve' commands.
4. Open 'http://localhost:4200/' in your browser.

I added buttons to test the commands provided by API, but it doesn't work properly (e.g. the toggleChat button doesn't do anything after I join the videoconference). I wanted to add some functionality for example measuring the participants' activity with the raiseHandUpdated event, but the events were triggered just occasionally, it seemed unpredictable and I couldn't figure it out why.
