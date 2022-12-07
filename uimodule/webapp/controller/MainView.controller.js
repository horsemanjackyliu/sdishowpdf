/* eslint-disable no-trailing-spaces */
/* eslint-disable @sap/ui5-jsdocs/no-jsdoc-param */
sap.ui.define(
  ["./BaseController", "sap/m/MessageBox", "sap/base/Log", "sap/ui/model/json/JSONModel", "sap/base/security/URLWhitelist"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, MessageBox, Log, JSONModel, URLWhitelist) {
    "use strict";

    return Controller.extend("com.sap.sdishowpdf1.controller.MainView", {
      onInit: function () {

        const request = new Request('/sdi/browser/f98b60e4-aed8-4e21-bd91-a64f0b3b4df8/root');
        request.headers.append("Content-Type", "application/json");
        // request.headers.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vaWFjYXBqLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0zNzI4NzA1MDUiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIxMjE1NDU1YTUyMDA0MTgxOTkxOGE4NzY5NTg1NjM3YSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiIwNjU5MGQ4Ny05YWZmLTQ0MTUtYWZlZC02NTlmN2E4NGNiZjkiLCJ6ZG4iOiJpYWNhcGoiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6IjIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiJ9LCJzdWIiOiJzYi0yMDYzOTAwNC1kOTEwLTRkZWMtYTRkOC03ODcwODM2MTdiMGYhYjEwODAxOHxzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYnVzaW5lc3NhZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1hZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG11c2VyIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbW1pZ3JhdGlvbmFkbWluIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1idXNpbmVzc2FkbWluIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbXVzZXIiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtbWlncmF0aW9uYWRtaW4iLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYWRtaW4iXSwiY2xpZW50X2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiY2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiYXpwIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIyMTI5NzQxMyIsImlhdCI6MTY3MDQwNTEyMSwiZXhwIjoxNjcwNDQ4MzIxLCJpc3MiOiJodHRwczovL2lhY2Fwai5hdXRoZW50aWNhdGlvbi5ldTEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiMDY1OTBkODctOWFmZi00NDE1LWFmZWQtNjU5ZjdhODRjYmY5IiwiYXVkIjpbInVhYSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCIsInNiLTIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiFiMTA4MDE4fHNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCJdfQ.IQaOLDrmp1HHhXIMXhlxOGLORfnIqgzyY6i7AqLRx86Z-1ZpwMrf8_2zhDmTKH-m_DN6wqzG1vPWA_9ynSjEdthAviKp7TDklp7NGsUiMgBlNkQpxuiRaNBhd1EDo5Z2MRdiPMjXuKlJ8JynYTrdlEZZYanhfQAaz0wwa5a9VvDxesaGKkksj6mLMmypgt6f98tFVzeHUf20Tt0jD0-s8N0707x9hOjv71fifAmLo8_wlKvJnrxuqKN1AHy15lF8PFyAoq6QPvOju3sT_ykJdGSwSskzzXV3ex6-ZPM8UcjyrpS7yuSFU6i2k3Vvc7Bkbn-UzFZjd2ka5ipXOh6ooA");
        fetch(request).then((res) => res.text()).then((data) => {
          const aItems = [];
          const loopbody = JSON.parse(data);
          loopbody.objects.forEach(body => {
            const a = body.object.properties;
            const b = JSON.stringify(a).replaceAll("cmis:", "");
            const c = JSON.parse(b);
            const docuId = c.objectId.value;
            let docuType = '';
            if (c.hasOwnProperty('contentStreamMimeType')) { docuType = c.contentStreamMimeType.value; }

            const docuName = c.name.value;
            if (docuType.length !== 0 && docuType === "application/pdf") {
              aItems.push({ "documentId": docuId, "documentName": docuName, "documentType": docuType });
            }
          });
          const oModel = new JSONModel({ items: aItems });
          this.getView().setModel(oModel);
        }).catch((err) => {
          Log.info("failed");
        });
      },
      pressButton: function () {

        // this.getView().getModel()
        const objId = this.byId('select').getSelectedItem().getText();
        const filename = this.byId('select').getSelectedItem().getAdditionalText();
        const urlO = new URL("http://www.sap.com");
        urlO.searchParams.append("cmisselector", "content");
        urlO.searchParams.append("download", "attachment");
        urlO.searchParams.append("filename", filename);
        urlO.searchParams.append("objectId", objId);

        const url = JSON.stringify(urlO).replace('http://www.sap.com', '/sdi/browser/f98b60e4-aed8-4e21-bd91-a64f0b3b4df8/root').replaceAll('"', '');
        const request = new Request(url);
        request.headers.append("Content-Type", "application/json");
        // request.headers.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vaWFjYXBqLmF1dGhlbnRpY2F0aW9uLmV1MTAuaGFuYS5vbmRlbWFuZC5jb20vdG9rZW5fa2V5cyIsImtpZCI6ImRlZmF1bHQtand0LWtleS0zNzI4NzA1MDUiLCJ0eXAiOiJKV1QifQ.eyJqdGkiOiIxMjE1NDU1YTUyMDA0MTgxOTkxOGE4NzY5NTg1NjM3YSIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiIwNjU5MGQ4Ny05YWZmLTQ0MTUtYWZlZC02NTlmN2E4NGNiZjkiLCJ6ZG4iOiJpYWNhcGoiLCJzZXJ2aWNlaW5zdGFuY2VpZCI6IjIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiJ9LCJzdWIiOiJzYi0yMDYzOTAwNC1kOTEwLTRkZWMtYTRkOC03ODcwODM2MTdiMGYhYjEwODAxOHxzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQiLCJhdXRob3JpdGllcyI6WyJ1YWEucmVzb3VyY2UiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYnVzaW5lc3NhZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1hZG1pbiIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG11c2VyIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbW1pZ3JhdGlvbmFkbWluIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NC5zZG1idXNpbmVzc2FkbWluIiwic2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0LnNkbXVzZXIiLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtbWlncmF0aW9uYWRtaW4iLCJzZG0tZGktU0RNX0RJX1BST0QtcHJvZCFiNDEwNjQuc2RtYWRtaW4iXSwiY2xpZW50X2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiY2lkIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiYXpwIjoic2ItMjA2MzkwMDQtZDkxMC00ZGVjLWE0ZDgtNzg3MDgzNjE3YjBmIWIxMDgwMTh8c2RtLWRpLVNETV9ESV9QUk9ELXByb2QhYjQxMDY0IiwiZ3JhbnRfdHlwZSI6ImNsaWVudF9jcmVkZW50aWFscyIsInJldl9zaWciOiIyMTI5NzQxMyIsImlhdCI6MTY3MDQwNTEyMSwiZXhwIjoxNjcwNDQ4MzIxLCJpc3MiOiJodHRwczovL2lhY2Fwai5hdXRoZW50aWNhdGlvbi5ldTEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiMDY1OTBkODctOWFmZi00NDE1LWFmZWQtNjU5ZjdhODRjYmY5IiwiYXVkIjpbInVhYSIsInNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCIsInNiLTIwNjM5MDA0LWQ5MTAtNGRlYy1hNGQ4LTc4NzA4MzYxN2IwZiFiMTA4MDE4fHNkbS1kaS1TRE1fRElfUFJPRC1wcm9kIWI0MTA2NCJdfQ.IQaOLDrmp1HHhXIMXhlxOGLORfnIqgzyY6i7AqLRx86Z-1ZpwMrf8_2zhDmTKH-m_DN6wqzG1vPWA_9ynSjEdthAviKp7TDklp7NGsUiMgBlNkQpxuiRaNBhd1EDo5Z2MRdiPMjXuKlJ8JynYTrdlEZZYanhfQAaz0wwa5a9VvDxesaGKkksj6mLMmypgt6f98tFVzeHUf20Tt0jD0-s8N0707x9hOjv71fifAmLo8_wlKvJnrxuqKN1AHy15lF8PFyAoq6QPvOju3sT_ykJdGSwSskzzXV3ex6-ZPM8UcjyrpS7yuSFU6i2k3Vvc7Bkbn-UzFZjd2ka5ipXOh6ooA");
        fetch(request).then((res) => res.arrayBuffer()).then((data) => {
          const blob = new Blob([data], { type: "application/pdf" });
          const docurl = URL.createObjectURL(blob);
          this._pdfModel = new JSONModel({
            Source: docurl,
            Title: filename,
            Height: "600px"
          });
          URLWhitelist.add("blob");
          this.byId("pdfview").setModel(this._pdfModel);

          // this.byId("pdf")
        }).catch(err => { console.log(err) });




      }
    });
  }
);
