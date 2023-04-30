import { randomUUID } from 'crypto';

export interface ReportProps {
  placeId: string;
  muteness: boolean;
  blindness: boolean;
  guideDog: boolean;
  hearingImpairment: boolean;
  learningImpairment: boolean;
  mobilityImpairment: boolean;
  visualImpairment: boolean;
  wheelchair: boolean;
}

export class Report {
  private _id: string;
  private props: ReportProps;

  constructor(props: ReportProps, id: string = randomUUID()) {
    this._id = id;
    this.props = props;
  }

  public get id() {
    return this._id;
  }

  public get placeId(): string {
    return this.props.placeId;
  }

  public get muteness(): boolean {
    return this.props.muteness;
  }

  public get blindness(): boolean {
    return this.props.blindness;
  }

  public get guideDog(): boolean {
    return this.props.guideDog;
  }

  public get hearingImpairment(): boolean {
    return this.props.hearingImpairment;
  }

  public get learningImpairment(): boolean {
    return this.props.learningImpairment;
  }

  public get mobilityImpairment(): boolean {
    return this.props.mobilityImpairment;
  }

  public get visualImpairment(): boolean {
    return this.props.visualImpairment;
  }

  public get wheelchair(): boolean {
    return this.props.wheelchair;
  }
}
