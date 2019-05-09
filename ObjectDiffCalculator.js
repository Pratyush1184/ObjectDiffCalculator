/*
Repeated values in an array not handled yet.
*/
module.exports = function () {
    return {
        VALUE_CREATED: 'created',
        VALUE_UPDATED: 'updated',
        VALUE_DELETED: 'deleted',
        VALUE_UNCHANGED: 'unchanged',
        map: function (obj1, obj2, flag = 0) {
            var diff = {};
            if (this.isObject(obj1) && this.isObject(obj2)) {
                if(obj1.hasOwnProperty('id')){
                    if(obj2.hasOwnProperty('id')){
                        if(flag==0){
                            if(obj1['id']==obj2['id']){
                                diff={
                                    deltaChangeStatus:this.VALUE_UNCHANGED,
                                    deltaChangeValue:obj1
                                }
                            }
                            else{
                                diff={
                                    deltaChangeStatus:this.VALUE_UPDATED,
                                    deltaChangeValue:obj2
                                }
                            }
                        }
                        else if(flag==1){
                            if(obj1['id']==obj2['id']){
                                diff={
                                    deltaChangeStatus:this.VALUE_UNCHANGED,
                                    deltaChangeValue:obj1
                                }
                            }
                            else{
                                diff={};
                            }
                        }
                        else{
                            if(obj1['id']==obj2['id']){
                                diff={
                                    deltaChangeStatus:this.VALUE_UNCHANGED,
                                    deltaChangeValue:obj1
                                }
                            }
                            else{
                                diff={
                                    deltaChangeStatus:this.VALUE_UPDATED,
                                    deltaChangeValue:obj2
                                }
                            }
                        }
                    }
                    return diff;
                }
                for (var key in obj2) {
                    if (this.isArray(obj2[key])) {
                        if (obj1.hasOwnProperty(key)) {
                            if (this.isArray(obj1[key])) {
                                if (key == 'migration') {
                                    var dummyobj1 = {};
                                    dummyobj1[key] = obj1[key];
                                    var dummyobj2 = {};
                                    dummyobj2[key] = obj2[key];
                                    diff[key] = this.compare_arrays_hard(dummyobj1[key], dummyobj2[key]);
                                }
                                else if (flag == 2) {
                                    diff[key] = this.compare_arrays_hard(obj1[key], obj2[key]);
                                }
                                else {
                                    diff[key] = this.compare_arrays(obj1[key], obj2[key]);
                                }
                            }
                            else {
                                if (this.parseDiff(diff[key])) {
                                    diff[key] = {
                                        deltaChangeStatus: this.VALUE_UPDATED,
                                        deltaChangeValue: obj2[key]
                                    };
                                }
                            }
                        }
                        else {
                            if (this.parseDiff(diff[key])) {
                                if (flag == 0) {
                                    diff[key] = {
                                        deltaChangeStatus: this.VALUE_CREATED,
                                        deltaChangeValue: obj2[key]
                                    };
                                }
                                else {
                                    continue;
                                }
                            }
                        }
                    }
                    else if (this.isObject(obj2[key])) {
                        if (obj1.hasOwnProperty(key)) {
                            if (this.isObject(obj1[key])) {
                                if (flag == 2) {
                                    diff[key] = this.map(obj1[key], obj2[key], 2);
                                }
                                else
                                    diff[key] = this.map(obj1[key], obj2[key]);
                            }
                            else {
                                if (this.parseDiff(diff[key])) {
                                    diff[key] = {
                                        deltaChangeStatus: this.VALUE_UPDATED,
                                        deltaChangeValue: obj2[key]
                                    };
                                }
                            }
                        }
                        else {
                            if (this.parseDiff(diff[key])) {
                                diff[key] = {
                                    deltaChangeStatus: this.VALUE_CREATED,
                                    deltaChangeValue: obj2[key]
                                };

                            }
                        }
                    }
                    else if (this.isValue(obj2[key])) {
                        if (obj1.hasOwnProperty(key)) {
                            if (this.isValue(obj1[key])) {
                                if ((obj1[key]) == (obj2[key])) {
                                    if (this.parseDiff(diff[key]))
                                        diff[key] = {
                                            deltaChangeStatus: this.VALUE_UNCHANGED,
                                            deltaChangeValue: obj1[key]
                                        }
                                }
                                else {
                                    if (this.parseDiff(diff[key])){
                                        diff[key] = {
                                            deltaChangeStatus: this.VALUE_UPDATED,
                                            deltaChangeValue: obj2[key]
                                        }
                                    }
                                }
                            }
                            else {
                                if (this.parseDiff(diff[key])) {
                                    diff[key] = {
                                        deltaChangeStatus: this.VALUE_UPDATED,
                                        deltaChangeValue: obj2[key]
                                    }
                                }
                            }
                        }
                        else {
                            if (this.parseDiff(diff[key])) {
                                if (flag == 0) {
                                    diff[key] = {
                                        deltaChangeStatus: this.VALUE_CREATED,
                                        deltaChangeValue: obj2[key]
                                    }
                                }
                                else {
                                    for (var key1 in obj2) {
                                        if (obj1.hasOwnProperty(key1)) {
                                            diff[key] = {
                                                deltaChangeStatus: this.VALUE_CREATED,
                                                deltaChangeValue: obj2[key]
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (var key in obj1) {
                    if (!obj2[key] && !this.isArray(obj1[key]) && flag == 0) {
                        diff[key] = {
                            deltaChangeStatus: this.VALUE_DELETED,
                            deltaChangeValue: obj1[key]
                        }
                    }
                }
            }
            return diff;
        },
        compare_arrays_hard: function (arr1, arr2) {
            var diff = {};
            for (var i = 0; i < Math.max(arr2.length, arr1.length); i++) {
                if (arr2[i] && this.isValue(arr2[i])) {
                    if (this.isValue(arr1[i])) {
                        if (arr1[i] == arr2[i]) {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_UNCHANGED,
                                deltaChangeValue: arr1[i]
                            }
                        }
                        else {
                            if (arr1[i]) {
                                diff[i] = {
                                    deltaChangeStatus: this.VALUE_CREATED,
                                    deltaChangeValue: arr2[i]
                                }
                            }
                            else{
                                diff[i] = {
                                    deltaChangeStatus: this.VALUE_UPDATED,
                                    deltaChangeValue: arr2[i]
                                }
                            }
                        }
                    }
                    else {
                        if (this.isEmpty(arr1[i])) {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_CREATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                        else{
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_UPDATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                    }
                }
                else if (!this.isEmpty(arr2[i]) && this.isArray(arr2[i])) {
                    if (this.isArray(arr1[i])) {
                        diff[i] = this.compare_arrays_hard(arr1[i], arr2[i]);
                    }
                    else {
                        if (this.isEmpty(arr1[i])) {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_CREATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                        else{
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_UPDATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                    }
                }
                else if (!this.isEmpty(arr2[i]) && this.isObject(arr2[i])) {
                    if (this.isObject(arr1[i])) {
                        diff[i] = this.map(arr1[i], arr2[i], 2);
                    }
                    else {
                        if (!this.isEmpty(arr1[i])) {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_UPDATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                        else {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_CREATED,
                                deltaChangeValue: arr2[i]
                            }
                        }
                    }
                }
                else {
                    if (this.isValue(arr1[i]) && (!arr1[i])) {
                        diff[i] = {
                            deltaChangeStatus: this.VALUE_UNCHANGED,
                            deltaChangeValue: arr1[i]
                        }
                    }
                    else if (this.isEmpty(arr1[i])) {
                        diff[i] = {
                            deltaChangeStatus: this.VALUE_UNCHANGED,
                            deltaChangeValue: arr1[i]
                        }
                    }
                    else {
                        diff[i] = {
                            deltaChangeStatus: this.VALUE_DELETED,
                            deltaChangeValue: arr1[i]
                        }
                    }
                }
            }
            return diff;
        },
        compare_arrays: function (arr1, arr2) {
            var diff = {};
            var flag1 = new Array(arr1.length);
            var flag2 = new Array(arr2.length);
            for (var i = 0; i < arr1.length; i++) {
                flag1[i] = 0;
                flag2[i] = 0;
            }
            if (true) {
                for (var i = 0; i < arr2.length; i++) {
                    for (var j = 0; j < arr1.length; j++) {
                        if (this.isValue(arr2[i])) {
                            if (this.isValue(arr1[j])) {
                                if (arr2[i] == arr1[j]) {
                                    flag1[j] = 1;
                                    flag2[i] = 1;
                                    diff[i] = {
                                        deltaChangeStatus: this.VALUE_UNCHANGED,
                                        deltaChangeValue: arr2[i]
                                    };
                                    break;
                                }
                                else {
                                    continue;
                                }
                            }
                            else {
                                continue;
                            }
                        }
                        else if (this.isObject(arr2[i])) {
                            if (this.isObject(arr1[j])) {
                                diff[i] = this.map(arr1[j], arr2[i], 1);
                                flag1[j] = 1;
                                flag2[i] = 1;
                                if(this.isEmpty(diff[i])){
                                    continue;
                                }
                                else if(this.parseDiff(diff[i])){
                                    break;
                                }
                            }
                            else {
                                continue;
                            }
                        }
                        else {
                            if (this.isArray(arr1[j])) {
                                diff[i] = this.compare_arrays(arr1[j], arr2[i]);
                                flag1[j] = 1;
                                flag2[i] = 1;
                                if(this.isEmpty(diff[i])){
                                    continue;
                                }
                                else if(this.parseDiff(diff[i])){
                                    break;
                                }
                            }
                            else {
                                continue;
                            }
                        }
                    }
                    if (j == arr1.length) {
                        if (this.isEmpty(diff[i])) {
                            diff[i] = {
                                deltaChangeStatus: this.VALUE_CREATED,
                                deltaChangeValue: arr2[i]
                            }
                    }
                    }
                }
               var count = 0;
                for (var i = 0; i < arr1.length; i++) {
                    if (flag1[i] == 1) {
                        continue;
                    }
                    else {
                            diff[count + arr2.length] = {
                                deltaChangeStatus: this.VALUE_DELETED,
                                deltaChangeValue: arr1[i]
                            }
                            count++;
                    }
                }
                for (var i = 0; i < arr2.length; i++) {
                    if (flag2[i] == 1) {
                        continue;
                    }
                    else {
                        diff[i] = {
                            deltaChangeStatus: this.VALUE_CREATED,
                            deltaChangeValue: arr2[i]
                        }
                    }
                }
            }
            return diff;
        },
        parseDiff: function (diff) {
            if (this.isEmpty(diff)||diff==undefined||this.hasEmpty(diff)||diff==null)
                return 1;
            if(diff.hasOwnProperty('deltaChangeStatus')){
                if(diff['deltaChangeStatus']==this.VALUE_UNCHANGED){
                    return 1;
                }
                else{
                    return 0;
                }
            }
            for (var key in diff) {
                if (diff[key].hasOwnProperty('deltaChangeStatus')) {
                    if (diff[key]['deltaChangeStatus'] == this.VALUE_UNCHANGED) {
                        continue;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    return this.parseDiff(diff[key]);
                }
            }
            return 1;
        },
        parseUpdates: function (diff) {
            if (this.isEmpty(diff))
                return 1;
            for (var key in diff) {
                if (diff[key].hasOwnProperty('deltaChangeStatus')) {
                    if (diff[key]['deltaChangeStatus'] == this.VALUE_UNCHANGED || diff[key]['deltaChangeStatus'] == this.VALUE_UPDATED) {
                        continue;
                    }
                    else {
                        return 0;
                    }
                }
                else {
                    return this.parseUpdates(diff[key]);
                }
            }
            return 1;
        },
        isArray: function (obj) {
            return {}.toString.apply(obj) === '[object Array]';
        },
        isObject: function (obj) {
            return {}.toString.apply(obj) === '[object Object]';
        },
        isValue: function (obj) {
            return !this.isArray(obj) && !this.isObject(obj);
        },
        isEmpty: function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        },
        optimiser: function (obj) {
            for (var key in obj) {
                if (obj[key].hasOwnProperty('deltaChangeStatus')) {
                    if (obj[key]['deltaChangeStatus'] == 'unchanged') {
                        delete obj[key];
                    }
                    else {
                        continue;
                    }
                }
                else {
                    if (this.hasEmpty(this.optimiser(obj[key]))) {
                        delete obj[key]
                    }
                    else {
                        obj[key] = this.optimiser(obj[key]);
                    }
                }
            }
            return obj;
        },
        hasEmpty: function (obj) {
            for (var key in obj) {
                if (JSON.stringify(obj[key]) != '{}')
                    return false;
            }
            return true;
        }
    }
}();
