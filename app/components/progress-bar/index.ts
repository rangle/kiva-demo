import { Component, Input } from 'angular2/core';
import { calcFundingProgress } from '../../utils';

@Component({
  selector: 'progress-bar',
  templateUrl: 'components/progress-bar/template.html',
  directives: [],
  providers: [],
  styleUrls: ['components/progress-bar/styles.css']
})
export class ProgressBar {
  @Input() goal: number;
  @Input() progress: number;
  @Input() height: number;
  public getProgressPercent() : string {
    const amt: number = calcFundingProgress(this.goal,this.progress);
    return `${amt === 0 ? String(amt + 1) : String(amt)}%`;
  }
}