import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tool } from '../models/tool.type';

@Component({
  selector: 'app-tool',
  templateUrl: './tool.component.html',
  styleUrls: ['./tool.component.scss']
})
export class ToolComponent {
  @Input() tool: Tool;
  @Output() rateTool = new EventEmitter<number>();

  updateRating(newRating: number) {
    this.rateTool.emit(newRating);
  }
}
