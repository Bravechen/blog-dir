import { Component,Input } from '@angular/core';

@Component({
    selector:'download-btn',
    templateUrl:'downloadBtn.html'
})
export class DownloadBtn{
    @Input() status:string;

    constructor(){

    }
}
