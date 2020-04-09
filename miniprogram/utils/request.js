"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BASE_API = require('../config/index').BASE_API;
var request = function (options) {
    return new Promise(function (resolve, reject) {
        var Authorization = wx.getStorageSync('token');
        wx.request({
            url: "" + (options.BASE_URL ? options.BASE_URL : BASE_API) + options.url,
            method: options.method,
            data: options.data,
            header: Authorization ? __assign(__assign({}, options.header), { Authorization: "Bearer " + Authorization }) : options.header,
            success: function (res) {
                if (res.data.code === '000000')
                    resolve(res.data);
                else
                    reject(res.data);
            }
        });
    });
};
exports.default = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFRLElBQUEsOENBQVEsQ0FBZ0M7QUFXaEQsSUFBTSxPQUFPLEdBQUcsVUFBQyxPQUFnQjtJQUUvQixPQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBVyxFQUFFLE1BQVU7UUFDbkQsSUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLE1BQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFHLE9BQU8sQ0FBQyxHQUFLO1lBQ3RFLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsTUFBTSxFQUFHLGFBQWEsQ0FBQyxDQUFDLHVCQUFNLE9BQU8sQ0FBQyxNQUFNLEtBQUcsYUFBYSxFQUFDLFlBQVUsYUFBZSxJQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUN6RyxPQUFPLEVBQUUsVUFBQyxHQUFPO2dCQUNmLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUTtvQkFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBOztvQkFDNUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFFRCxrQkFBZSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQERlc2NyaXB0dGlvbjogXG4gKiBAQXV0aG9yOiBiYWlodWF5YW5nXG4gKiBARGF0ZTogMjAyMC0wMy0wOSAxMTo0MzowOFxuICogQExhc3RFZGl0VGltZTogMjAyMC0wMy0xMCAxMDo0NzoyNlxuICovXG5cbi8vIGltcG9ydCB7IFByb21pc2UgfSBmcm9tICdlczYtcHJvbWlzZSc7XG5jb25zdCB7IEJBU0VfQVBJIH0gPSByZXF1aXJlKCcuLi9jb25maWcvaW5kZXgnKTtcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBCQVNFX1VSTD86IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIG1ldGhvZDogYW55O1xuICBkYXRhPzogb2JqZWN0O1xuICBoZWFkZXI/OiBvYmplY3Q7XG4gIGVuYWJsZUh0dHAyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgcmVxdWVzdCA9IChvcHRpb25zOiBPcHRpb25zKSA9PiB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIG5ldyBQcm9taXNlPFJlc3BvbnNlPigocmVzb2x2ZTphbnksIHJlamVjdDphbnkpID0+IHtcbiAgICBjb25zdCBBdXRob3JpemF0aW9uID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGAke29wdGlvbnMuQkFTRV9VUkwgPyBvcHRpb25zLkJBU0VfVVJMIDogQkFTRV9BUEl9JHtvcHRpb25zLnVybH1gLFxuICAgICAgbWV0aG9kOiBvcHRpb25zLm1ldGhvZCxcbiAgICAgIGRhdGE6IG9wdGlvbnMuZGF0YSxcbiAgICAgIGhlYWRlcjogIEF1dGhvcml6YXRpb24gPyB7IC4uLm9wdGlvbnMuaGVhZGVyICwgQXV0aG9yaXphdGlvbjpgQmVhcmVyICR7QXV0aG9yaXphdGlvbn1gIH0gOiBvcHRpb25zLmhlYWRlcixcbiAgICAgIHN1Y2Nlc3M6IChyZXM6YW55KSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09PSAnMDAwMDAwJykgcmVzb2x2ZShyZXMuZGF0YSlcbiAgICAgICAgZWxzZSByZWplY3QocmVzLmRhdGEpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XG4iXX0=