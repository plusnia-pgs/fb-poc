import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ViewChild } from '@angular/core';
import { CdkDropList, moveItemInArray, CdkDragEnter, CdkDropListGroup, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;
  @ViewChild(CdkDropList) placeholder: CdkDropList;

  public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public target: CdkDropList;
  public targetIndex: number;
  public source;
  public sourceIndex: number;

  constructor() {
    this.target = null;
    this.source = null;
  }

  ngAfterViewInit() {
    let phElement = this.placeholder.element.nativeElement;

    phElement.style.display = 'none';
    phElement.parentNode.removeChild(phElement);
  }

  drop() {
    if (!this.target)
      return;

    let phElement = this.placeholder.element.nativeElement;
    let parent = phElement.parentNode;

    phElement.style.display = 'none';

    parent.removeChild(phElement);
    parent.appendChild(phElement);
    parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

    this.target = null;
    this.source = null;

    if (this.sourceIndex != this.targetIndex)
      moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
  }

  enter = (drag: CdkDrag, drop: CdkDropList) => {
    if (drop == this.placeholder)
      return true;

    let phElement = this.placeholder.element.nativeElement;
    let dropElement = drop.element.nativeElement;

    let dragIndex = __indexOf(dropElement.parentNode.children, drag.dropContainer.element.nativeElement);
    let dropIndex = __indexOf(dropElement.parentNode.children, dropElement);

    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = drag.dropContainer;

      let sourceElement = this.source.element.nativeElement;
      phElement.style.width = sourceElement.clientWidth + 'px';
      phElement.style.height = sourceElement.clientHeight + 'px';
      
      sourceElement.parentNode.removeChild(sourceElement);
    }

    this.targetIndex = dropIndex;
    this.target = drop;

    phElement.style.display = '';
    dropElement.parentNode.insertBefore(phElement, (dragIndex < dropIndex)
      ? dropElement.nextSibling : dropElement);

    this.source.start();
    this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);

    return false;
  }

}

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
  };