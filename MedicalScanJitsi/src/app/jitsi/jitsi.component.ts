import { AfterViewInit, Component } from '@angular/core';
import { interval } from 'rxjs';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-product',
  templateUrl: './jitsi.component.html',
  styleUrls: ['./jitsi.component.scss'],
})
export class JitsiComponent implements AfterViewInit {
  domain: string = 'meet.jit.si';
  options: any;
  api: any;
  chat: boolean = false
  hand: boolean = false
  audio: boolean = false

  ngAfterViewInit(): void {
    this.options = {
      roomName: 'Dave',
      width: '96vw',
      height: '93vh',
      parentNode: document.querySelector('#meet'),
    };
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);

    this.api.addListener('participantJoined', (participant: any) => {
      console.log(participant);
    });
    this.api.addListener('participantLeft', (participant: any) => {
      console.log(participant);
    });

    this.api.addListener('videoConferenceJoined', (participant: any) => {
      console.log(participant);
    });

    this.api.addListener('videoConferenceLeft', (participant: any) => {
      console.log(participant);
    });

    this.api.addListener('raiseHandUpdated', (participant: any) => {
      console.log(participant);
  
    });
  }


  toggleChat(){
    this.api.executeCommand('toggleChat')
    this.chat = !this.chat
  }

  toggleAudio(){
    this.api.executeCommand('toggleAudio')
    this.audio = !this.audio
  }

}
