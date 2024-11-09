import { HTTP_STATUS_CODE } from "../constants";

type ApiResponseProps<Body> = {
  body?: Body;
  statusCode?: number;
  errorMessage?: string;
};
export class ApiResponse<Body> {
  private readonly _body: Body | null;
  private readonly _statusCode: number;
  private readonly _errorMessage: string | null;
  constructor({ body, statusCode, errorMessage }: ApiResponseProps<Body>) {
    this._body = body ?? null;
    this._errorMessage = errorMessage ?? null;
    this._statusCode = statusCode ?? HTTP_STATUS_CODE.ok;
  }
  throwError() {
    throw new Error(this._errorMessage ?? "oops");
  }
  get isSucess() {
    return this._statusCode <= HTTP_STATUS_CODE.badRequest;
  }
  get isFailure() {
    return this._statusCode >= HTTP_STATUS_CODE.badRequest;
  }
  get body(): Body {
    if (this._body === null) {
      throw new Error("fudeu");
    }
    return this._body;
  }
  get errorMessage(): string {
    if (!this.errorMessage) {
      throw new Error("ja era paizao");
    }
    return this.errorMessage;
  }
  get statusCode(): number {
    if (!this.statusCode) {
      throw new Error("O numero não vdd");
    }
    return this.statusCode;
  }
}
