import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VoiceService } from './voice.service';
import { HttpClient } from '@angular/common/http';

describe('VoiceService', () => {
  let service: VoiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[VoiceService,HttpClient]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(VoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
