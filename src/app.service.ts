import { Injectable } from '@nestjs/common';
import { TimestampMixin } from './timestamp.mixin';
import { LoggerMixin } from './logger.mixin';

interface EchoRequest {
  method: string;
  path: string;
  urlParams: any;
  queryParams: any;
  body: any;
}

@Injectable()
class BaseEchoService {
  private requests: EchoRequest[] = [];

  echoRequest(request: EchoRequest) {
    this.requests.push(request);
    return request;
  }

  getAllRequests() {
    return this.requests;
  }
}

const MixedEchoService = TimestampMixin(LoggerMixin(BaseEchoService));

@Injectable()
export class AppService extends MixedEchoService {
  echoRequest(request: EchoRequest) {
    const timestampedRequest = {
      ...request,
      timestamp: this.getTimestamp(),
    };
    const result = super.echoRequest(timestampedRequest);
    this.log(`Received request: ${JSON.stringify(result)}`);
    return result;
  }
}