/* Functions within objects not yet supported */
module.exports={
    deltaObj:{},
    ObjectDiffCalculator: function(obj1, obj2, deltaObj){
        if(this.isEqual(obj1,obj2)){
            deltaObj.deltaChangeStatus="unchanged";
            deltaObj.deltaChangeValue=obj1;
        }
        else{
            for(var key in obj1){
                if(obj2.hasOwnProperty(key)){
                    var type1=Object.prototype.toString.call(obj1[key]);
                    var type2=Object.prototype.toString.call(obj2[key]);            
                    if(this.isEqual(obj1[key],obj2[key])){
                        deltaObj[key]={};
                        deltaObj[key]["deltaChangeStatus"]="unchanged";
                        deltaObj[key]["deltaChangeValue"]=obj1[key];
                    }
                    else{
                        if(['[object Array]','[object Object]'].indexOf(type1)<0 && ['[object Array]','[object Object]'].indexOf(type2)<0 ){
                            deltaObj[key]={};
                            deltaObj[key]["deltaChangeStatus"]="updated";
                            deltaObj[key]["deltaChangeValue"]=obj2[key];
                        }
                        else if(type1!==type2){
                            deltaObj[key]={};
                            deltaObj[key]["deltaChangeStatus"]="updated";
                            deltaObj[key]["deltaChangeValue"]=obj2[key];
                        }
                        else{
                            deltaObj[key]={};
                            this.ObjectDiffCalculator(obj1[key],obj2[key],deltaObj[key]);
                        }
                    }
                }
                else{
                    deltaObj[key]={};
                    deltaObj[key]["deltaChangeStatus"]="deleted";
                    deltaObj[key]["deltaChangeValue"]=obj1[key];
                }
            }
            for(var key in obj2){
                if(!obj1.hasOwnProperty(key)){
                    deltaObj[key]={};
                    deltaObj[key]["deltaChangeStatus"]="created";
                    deltaObj[key]["deltaChangeValue"]=obj2[key];
                }
            }
        }
    },
    isEqual: function(obj1,obj2){
        var type1=Object.prototype.toString.call(obj1);
        var type2=Object.prototype.toString.call(obj2);
        if(type1!==type2){
            return false;
        }
        if(['[object Array]','[object Object]'].indexOf(type1)<0 && ['[object Array]','[object Object]'].indexOf(type2)<0 ){
            return obj1===obj2;
        }
        else if(type1===type2 && type1==='[object Array]'){
            if(obj1.length===obj2.length){
                for(var i=0;i<obj1.length;i++){
                    if(!this.isEqual(obj1[i],obj2[i])){
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        else if(type1===type2 && type1==='[object Object]'){
            if(obj1 && obj2 && Object.keys(obj1).length===Object.keys(obj2).length){
                for(var key in obj1){
                    if(obj1.hasOwnProperty(key)){
                        if(!this.isEqual(obj1[key],obj2[key])){
                            return false;
                        }
                    }
                }
                return true;
            }
            return false;
        }
    }
}
var obj1={
    "id": 132,
    "feedback": [
      
    ],
    "json": {
      "markers": [
        {
          "targetId": "NFT_FireExtinguisherAR",
          "type": "image",
          "markerWithHP": true,
          "markerData": [
            {
              "name": "Marker3",
              "buttons": [
                {
                  "x": 1,
                  "y": -0.16999999999999998,
                  "id": 11,
                  "data": "/files/hotspots?file=circle_filled_red.png",
                  "shape": "circle",
                  "action": "20239",
                  "format": ".jpg",
                  "portInfo": {
                    
                  },
                  "stepButtonId": 111
                },
                {
                  "x": 0.99,
                  "y": -0.55,
                  "id": 12,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {
                    
                  },
                  "stepButtonId": 112
                }
              ],
              "objects": [
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                },
                {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                }
              ]
            }
          ]
        },
        {
          "targetId": "NFT_FireExtinguisherAR",
          "type": "image",
          "markerWithHP": true,
          "markerData": [
            {
              "name": "Marker3",
              "buttons": [
                {
                  "x": 1,
                  "y": -0.15000000000000002,
                  "id": 11,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {
                    
                  },
                  "stepButtonId": 211
                }
              ],
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                },
                {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                }
              ]
            }
          ]
        },
        {
          "targetId": null,
          "markerData": [
            {
              "name": null,
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "type": "3d",
                  "format": ".zip",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "count": 4,
                  "name": "mercedes.babylon",
                  "folderName": "mercedes"
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "folderName": null
                },
                {
                  "id": "alligator4",
                  "type": "audio",
                  "format": ".mp3",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "alligator4",
                  "folderName": null
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "assignment_video",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "assignment_video",
                  "folderName": null
                },
                {
                  "id": "3",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "3",
                  "folderName": null
                },
                {
                  "id": "Data Cable 3",
                  "type": "anim",
                  "format": ".zip",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "count": 145,
                  "viewButton": false,
                  "docid": "",
                  "name": "Data Cable 3",
                  "folderName": "d1"
                },
                {
                  "id": "IMG_0520",
                  "type": "image",
                  "format": ".bmp",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "IMG_0520",
                  "folderName": null
                }
              ]
            }
          ]
        }
      ],
      "imageTarget": [
        {
          "id": "NFT_FireExtinguisherAR",
          "data": "/files/marker/4ad773fe57a4ed487385e28d59283f31?file=NFT_FireExtinguisherAR.zip",
          "type": "image",
          "format": "NFT_ZIP",
          "fileName": "FireExtinguisher.xml"
        }
      ],
      "migration": [
        {
          "targetId": "NFT_FireExtinguisherAR",
          "content": "",
          "markerWithHP": true,
          "mode": "ARMode",
          "message": "AR-Multiple hotspots",
          "instruction": "Go to marker and hover on it",
          "migrationId": 1,
          "steps": [
            {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "20239"
            },
            {
              "markers": "Marker3",
              "hotspot": 12,
              "stepId": 1,
              "content": "mercedes_single_level_1"
            }
          ]
        },
        {
          "targetId": "NFT_FireExtinguisherAR",
          "content": "",
          "markerWithHP": true,
          "mode": "ARMode",
          "message": "AR",
          "instruction": "Go to marker and hover on it",
          "migrationId": 2,
          "steps": [
            {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "mercedes_single_level_1"
            }
          ]
        },
        {
          "content": "mercedes_single_level_1",
          "mode": "NonARMode",
          "message": "Non AR",
          "migrationId": 3
        }
      ]
    }
  };
  var obj2={
    "id": 132,
    "feedback": [],
    "json": {
      "markers": [
        {
          "targetId": "NFT_FireExtinguisherAR",
          "type": "image",
          "markerWithHP": true,
          "markerData": [
            {
              "name": "Marker3",
              "buttons": [
                {
                  "x": 1,
                  "y": -0.16999999999999998,
                  "id": 11,
                  "data": "/files/hotspots?file=circle_filled_red.png",
                  "shape": "circle",
                  "action": "20239",
                  "format": ".jpg",
                  "portInfo": {},
                  "stepButtonId": 111
                },
                {
                  "x": 0.99,
                  "y": -0.55,
                  "id": 12,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {},
                  "stepButtonId": 112
                },
                {
                  "x": 1.23,
                  "y": -0.4,
                  "id": 13,
                  "data": "/files/hotspots?file=triangle_filled_yellow.png",
                  "shape": "triangle",
                  "action": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "format": ".png",
                  "portInfo": {},
                  "stepButtonId": 113
                }
              ],
              "objects": [
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                },
                {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "data": "/files/media/2c28cc2bbaa5e8656bbc86540b9411ba?file=scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000.png",
                  "name": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".png",
                  "folderName": null,
                  "viewButton": false
                }
              ]
            }
          ]
        },
        {
          "targetId": "NFT_FireExtinguisherAR",
          "type": "image",
          "markerWithHP": true,
          "markerData": [
            {
              "name": "Marker3",
              "buttons": [
                {
                  "x": 1,
                  "y": -0.15000000000000002,
                  "id": 11,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {},
                  "stepButtonId": 211
                }
              ],
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                },
                {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                }
              ]
            }
          ]
        },
        {
          "targetId": null,
          "markerData": [
            {
              "name": null,
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "type": "3d",
                  "format": ".zip",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "count": 4,
                  "name": "mercedes.babylon",
                  "folderName": "mercedes"
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "folderName": null
                },
                {
                  "id": "alligator4",
                  "type": "audio",
                  "format": ".mp3",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "alligator4",
                  "folderName": null
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "assignment_video",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "assignment_video",
                  "folderName": null
                },
                {
                  "id": "3",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "3",
                  "folderName": null
                },
                {
                  "id": "Data Cable 3",
                  "type": "anim",
                  "format": ".zip",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "count": 145,
                  "viewButton": false,
                  "docid": "",
                  "name": "Data Cable 3",
                  "folderName": "d1"
                },
                {
                  "id": "IMG_0520",
                  "type": "image",
                  "format": ".bmp",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "IMG_0520",
                  "folderName": null
                }
              ]
            }
          ]
        }
      ],
      "imageTarget": [
        {
          "id": "NFT_FireExtinguisherAR",
          "data": "/files/marker/4ad773fe57a4ed487385e28d59283f31?file=NFT_FireExtinguisherAR.zip",
          "type": "image",
          "format": "NFT_ZIP",
          "fileName": "FireExtinguisher.xml"
        }
      ],
      "migration": [
        {
          "targetId": "NFT_FireExtinguisherAR",
          "content": "",
          "markerWithHP": true,
          "mode": "ARMode",
          "message": "AR-Multiple hotspots",
          "instruction": "Go to marker and hover on it",
          "migrationId": 1,
          "steps": [
            {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "20239"
            },
            {
              "markers": "Marker3",
              "hotspot": 12,
              "stepId": 1,
              "content": "mercedes_single_level_1"
            },
            {
              "markers": "Marker3",
              "hotspot": 13,
              "stepId": 2,
              "content": "20239"
            }
          ]
        },
        {
          "targetId": "NFT_FireExtinguisherAR",
          "content": "",
          "markerWithHP": true,
          "mode": "ARMode",
          "message": "AR",
          "instruction": "Go to marker and hover on it",
          "migrationId": 2,
          "steps": [
            {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "mercedes_single_level_1"
            }
          ]
        },
        {
          "content": "mercedes_single_level_1",
          "mode": "NonARMode",
          "message": "Non AR",
          "migrationId": 3
        }
      ]
    }
  };
var delta={};
module.exports.ObjectDiffCalculator(obj1,obj2,delta);
console.log(JSON.stringify(delta));

/*
OUTPUT:
{
  "id": {
    "deltaChangeStatus": "unchanged",
    "deltaChangeValue": 132
  },
  "feedback": {
    "deltaChangeStatus": "unchanged",
    "deltaChangeValue": []
  },
  "json": {
    "markers": {
      "0": {
        "targetId": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "NFT_FireExtinguisherAR"
        },
        "type": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "image"
        },
        "markerWithHP": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": true
        },
        "markerData": {
          "0": {
            "name": {
              "deltaChangeStatus": "unchanged",
              "deltaChangeValue": "Marker3"
            },
            "buttons": {
              "0": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "x": 1,
                  "y": -0.16999999999999998,
                  "id": 11,
                  "data": "/files/hotspots?file=circle_filled_red.png",
                  "shape": "circle",
                  "action": "20239",
                  "format": ".jpg",
                  "portInfo": {},
                  "stepButtonId": 111
                }
              },
              "1": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "x": 0.99,
                  "y": -0.55,
                  "id": 12,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {},
                  "stepButtonId": 112
                }
              },
              "2": {
                "deltaChangeStatus": "created",
                "deltaChangeValue": {
                  "x": 1.23,
                  "y": -0.4,
                  "id": 13,
                  "data": "/files/hotspots?file=triangle_filled_yellow.png",
                  "shape": "triangle",
                  "action": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "format": ".png",
                  "portInfo": {},
                  "stepButtonId": 113
                }
              }
            },
            "objects": {
              "0": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "1": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                }
              },
              "2": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "3": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "4": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "5": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "6": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "7": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "8": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                }
              },
              "9": {
                "deltaChangeStatus": "unchanged",
                "deltaChangeValue": {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                }
              },
              "10": {
                "deltaChangeStatus": "created",
                "deltaChangeValue": {
                  "id": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "data": "/files/media/2c28cc2bbaa5e8656bbc86540b9411ba?file=scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000.png",
                  "name": "scenic-beauty-canada-snow-mountains-glacial-lake-water-rugged-terrain_e1zni771g__F0000",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".png",
                  "folderName": null,
                  "viewButton": false
                }
              }
            }
          }
        }
      },
      "1": {
        "deltaChangeStatus": "unchanged",
        "deltaChangeValue": {
          "targetId": "NFT_FireExtinguisherAR",
          "type": "image",
          "markerWithHP": true,
          "markerData": [
            {
              "name": "Marker3",
              "buttons": [
                {
                  "x": 1,
                  "y": -0.15000000000000002,
                  "id": 11,
                  "data": "/files/hotspots?file=triangle_filled_indigo.png",
                  "shape": "triangle",
                  "action": "mercedes_single_level_1",
                  "format": ".zip",
                  "portInfo": {},
                  "stepButtonId": 211
                }
              ],
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "name": "mercedes.babylon",
                  "type": "3d",
                  "count": 4,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "mercedes",
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "alligator4",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "name": "alligator4",
                  "type": "audio",
                  "count": null,
                  "docid": "",
                  "format": ".mp3",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "20239",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "name": "20239",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "assignment_video",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "name": "assignment_video",
                  "type": "video",
                  "count": null,
                  "docid": "",
                  "format": ".mp4",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "3",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "name": "3",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".jpg",
                  "folderName": null,
                  "viewButton": false
                },
                {
                  "id": "Data Cable 3",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "name": "Data Cable 3",
                  "type": "anim",
                  "count": 145,
                  "docid": "",
                  "format": ".zip",
                  "folderName": "d1",
                  "viewButton": false
                },
                {
                  "id": "IMG_0520",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "name": "IMG_0520",
                  "type": "image",
                  "count": null,
                  "docid": "",
                  "format": ".bmp",
                  "folderName": null,
                  "viewButton": false
                }
              ]
            }
          ]
        }
      },
      "2": {
        "deltaChangeStatus": "unchanged",
        "deltaChangeValue": {
          "targetId": null,
          "markerData": [
            {
              "name": null,
              "objects": [
                {
                  "id": "mercedes_single_level_1",
                  "type": "3d",
                  "format": ".zip",
                  "data": "/files/media/e0d7ed60f6e48b089ee2f7c0ff9af750?file=mercedes_gltf.scnassets.zip",
                  "count": 4,
                  "name": "mercedes.babylon",
                  "folderName": "mercedes"
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "Mobiliya - Object Detection using Deep Learning3",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/c25a03e68fec23ffac27db1464ad8905?file=Mobiliya-ObjectDetectionusingDeepLearning3.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "Mobiliya - Object Detection using Deep Learning3",
                  "folderName": null
                },
                {
                  "id": "alligator4",
                  "type": "audio",
                  "format": ".mp3",
                  "data": "/files/media/557f10e08d9089439e983c41a86f7d11?file=alligator4.mp3",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "alligator4",
                  "folderName": null
                },
                {
                  "id": "20239",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/924db5f4be9dfb6371f5bf74feac2bec?file=20239.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "20239",
                  "folderName": null
                },
                {
                  "id": "assignment_video",
                  "type": "video",
                  "format": ".mp4",
                  "data": "/files/media/101e3a1ce4cff6d4e70c3f926e1c4daa?file=assignment_video.mp4",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "assignment_video",
                  "folderName": null
                },
                {
                  "id": "3",
                  "type": "image",
                  "format": ".jpg",
                  "data": "/files/media/797dc3b7d30040e6d1c3c0296f6b7f11?file=3.jpg",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "3",
                  "folderName": null
                },
                {
                  "id": "Data Cable 3",
                  "type": "anim",
                  "format": ".zip",
                  "data": "/files/media/b3d1cf73400e8ed0732015c137540656?file=DataCable3.zip",
                  "count": 145,
                  "viewButton": false,
                  "docid": "",
                  "name": "Data Cable 3",
                  "folderName": "d1"
                },
                {
                  "id": "IMG_0520",
                  "type": "image",
                  "format": ".bmp",
                  "data": "/files/media/3c04e45e78ecbd666c12ae34eb88f9aa?file=IMG_0520.bmp",
                  "count": null,
                  "viewButton": false,
                  "docid": "",
                  "name": "IMG_0520",
                  "folderName": null
                }
              ]
            }
          ]
        }
      }
    },
    "imageTarget": {
      "deltaChangeStatus": "unchanged",
      "deltaChangeValue": [
        {
          "id": "NFT_FireExtinguisherAR",
          "data": "/files/marker/4ad773fe57a4ed487385e28d59283f31?file=NFT_FireExtinguisherAR.zip",
          "type": "image",
          "format": "NFT_ZIP",
          "fileName": "FireExtinguisher.xml"
        }
      ]
    },
    "migration": {
      "0": {
        "targetId": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "NFT_FireExtinguisherAR"
        },
        "content": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": ""
        },
        "markerWithHP": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": true
        },
        "mode": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "ARMode"
        },
        "message": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "AR-Multiple hotspots"
        },
        "instruction": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": "Go to marker and hover on it"
        },
        "migrationId": {
          "deltaChangeStatus": "unchanged",
          "deltaChangeValue": 1
        },
        "steps": {
          "0": {
            "deltaChangeStatus": "unchanged",
            "deltaChangeValue": {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "20239"
            }
          },
          "1": {
            "deltaChangeStatus": "unchanged",
            "deltaChangeValue": {
              "markers": "Marker3",
              "hotspot": 12,
              "stepId": 1,
              "content": "mercedes_single_level_1"
            }
          },
          "2": {
            "deltaChangeStatus": "created",
            "deltaChangeValue": {
              "markers": "Marker3",
              "hotspot": 13,
              "stepId": 2,
              "content": "20239"
            }
          }
        }
      },
      "1": {
        "deltaChangeStatus": "unchanged",
        "deltaChangeValue": {
          "targetId": "NFT_FireExtinguisherAR",
          "content": "",
          "markerWithHP": true,
          "mode": "ARMode",
          "message": "AR",
          "instruction": "Go to marker and hover on it",
          "migrationId": 2,
          "steps": [
            {
              "markers": "Marker3",
              "hotspot": 11,
              "stepId": 0,
              "content": "mercedes_single_level_1"
            }
          ]
        }
      },
      "2": {
        "deltaChangeStatus": "unchanged",
        "deltaChangeValue": {
          "content": "mercedes_single_level_1",
          "mode": "NonARMode",
          "message": "Non AR",
          "migrationId": 3
        }
      }
    }
  }
}
*/
