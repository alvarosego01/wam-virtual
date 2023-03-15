import { Injectable } from '@angular/core';

declare var AFRAME: any;

@Injectable({
    providedIn: 'root'
})
export class A_TableStands_ComponentService {

    model: string = './assets/files/3dmodel/stands/kiosko/ChiringuitoFinalColor.gltf';
    frontImage: string = './assets/files/elements/advertising/zarzuelaporelmundo/zarzuelasquare.jpg';

    constructor() {

        this.setInit_A_Component();

    }

    setInit_A_Component() {

        AFRAME.registerComponent('a_table_stand', {

            schema: {

                model: {
                    type: 'string',
                    default: this.model
                },
                frontImage: {
                    type: 'string',
                    default: this.frontImage

                },


            },
            init: function () {

                var entity = this.el;
                // entity.setAttribute('position', this.data.position);
                // entity.setAttribute('rotation', this.data.rotation);

                var tableStandBody = document.createElement('a-entity');
                tableStandBody.setAttribute('id', 'a_table_stand_body');
                tableStandBody.setAttribute('position', '0 0 0');
                tableStandBody.setAttribute('rotation', '0 0 0');

                var tableStandModel = document.createElement('a-gltf-model');
                tableStandModel.setAttribute('static-body', '');
                tableStandModel.setAttribute('id', 'a_table_stand_model');
                tableStandModel.setAttribute('static-body', 'sphereRadius: NaN');
                tableStandModel.setAttribute('rotation', '0.002864788975654116 -173.525424875526 0.0005729577951308233');
                tableStandModel.setAttribute('position', '0 0 0');
                tableStandModel.setAttribute('scale', '1.5 1.5 1.5');
                tableStandModel.setAttribute('src', this.data.model);
                tableStandBody.appendChild(tableStandModel);

                var tableStandFrontalImageBody = document.createElement('a-entity');
                tableStandFrontalImageBody.setAttribute('id', 'a_table_stand_frontal_image_body');
                tableStandFrontalImageBody.setAttribute('scale', '1 1 1');
                tableStandFrontalImageBody.setAttribute('position', '-0.15358 1.42714 -1.82278');

                var tableStandFrontalImage = document.createElement('a-image');
                tableStandFrontalImage.setAttribute('position', '0 0 0');
                tableStandFrontalImage.setAttribute('id', 'a_table_stand_frontal_image');
                tableStandFrontalImage.setAttribute('scale', '2 2 2');
                tableStandFrontalImage.setAttribute('rotation', '0 -174.86557315833699 0');
                tableStandFrontalImage.setAttribute('material', 'src: ' + this.data.frontImage);
                tableStandFrontalImageBody.appendChild(tableStandFrontalImage);

                tableStandBody.appendChild(tableStandFrontalImageBody);
                entity.appendChild(tableStandBody);

            }

        });




    }

}
