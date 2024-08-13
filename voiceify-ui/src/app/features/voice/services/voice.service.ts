import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { IRequestTextToSpeech } from '../interfaces/irequest-text-to-speech';
import { IVoiceResponse } from '../interfaces/ivoice-response';


@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor(private httpClient: HttpClient) { }
  
  public getAudioBlobUrlByInputText(request: IRequestTextToSpeech): Observable<string> {
    return this.httpClient.post("http://localhost:3000/text-to-speech", request, {
      responseType: 'arraybuffer'
    }).pipe(
      map((response) => this.bytesToBlobAudioURL(new Uint8Array(response))),
      catchError(error => {
        console.error('Une erreur s\'est produite lors de la conversion du texte :', error);
        // TODO : REDÉFINIR LE MESSAGE D'ERREUR
        throw "Erreur produite";
      })
    );
  }

  public getAllVoices(): Observable<IVoiceResponse[]> {
    return this.httpClient.get("http://localhost:3000/voices").pipe(
      map((response) => response as IVoiceResponse[]),
      catchError((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des voix :', error);
        //TODO REDIFNED THE MESSAGE
       throw "Erreur produite";
      })
    );
  // }
  }

  /**
   * Create a new blob url with audio bytes
   * @param bytes audio bytes
   * @returns the blob url
   */
  private bytesToBlobAudioURL(bytes: Uint8Array): string {
    const blob = new Blob([bytes], { type: 'audio/mp3' });
    return URL.createObjectURL(blob);
  }
  
}
