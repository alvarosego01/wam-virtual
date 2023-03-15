import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { A_TableStands_ComponentService } from '../../../aframe/components';

// import * as THREE from 'three';
declare var THREE: any;
declare var CANNON: any;

declare var AFRAME: any;


@Component({
    selector: 'app-aframe-tests',
    templateUrl: './aframe-tests.component.html',
    styleUrls: ['./aframe-tests.component.sass']
})
export class AframeTestsComponent implements OnInit {


    @ViewChild('test') test: any;

    constructor(
        public _A_TableStands_ComponentService: A_TableStands_ComponentService

    ) {

    }

    ngOnInit() {



    }


    reinjectConfigPanel() {



    }




}


