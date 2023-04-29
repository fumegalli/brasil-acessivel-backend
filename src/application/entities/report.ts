import { randomUUID } from 'crypto';

export interface ReportProps {
  id: string;
  placeId: string;
  muteness: boolean;
}

export class Report {
  constructor(private readonly props: ReportProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
    };
  }

  public get id() {
    return this.props.id;
  }

  public get placeId(): string {
    return this.props.placeId;
  }

  public get muteness(): boolean {
    return this.props.muteness;
  }
}
