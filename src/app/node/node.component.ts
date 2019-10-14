import { Component, OnInit } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { myService } from '../my-service.service';  
import { Node } from './NodeModel';
@Component({  
  selector: 'app-node',  
  templateUrl: './node.component.html',  
  styleUrls: ['./node.component.css']  
})  
export class NodeComponent implements OnInit {  
  dataSaved = false;  
  nodeForm: any;  
 allNodes:Node [];  
  nodeIdUpdate = null;  
  massage = null;  
  node:Node;
  EditEnabled:any;
  
   constructor(private formbulider: FormBuilder, private mySrv:myService) { }  
  
  ngOnInit() {  
        this.nodeForm = this.formbulider.group({  
      nodeId: [''],  
      city: [''], 
     // rnd: [''],
      onlineTime: [''],
      isOnline: [''],
      uploadUtilization: [''],
      downloadUtilization: [''],
      errorRate: [''], 
      connectedClients:['']
      });  
    this.loadAllNodes();
    this.EditEnabled=false; 
    this.nodeForm.controls['onlineTime'].disable();
   // this.nodeForm.controls['rnd'].disable();  
     this.nodeForm.controls['onlineTime'].disable();  
     this.nodeForm.controls['isOnline'].disable();  
     this.nodeForm.controls['uploadUtilization'].disable();  
     this.nodeForm.controls['downloadUtilization'].disable();  
     this.nodeForm.controls['errorRate'].disable();  
     this.nodeForm.controls['connectedClients'].disable(); 
 
  }  
loadAllNodes() {  
  this.mySrv.getAllNodes().subscribe(data=> this.allNodes = data); 
  }  
onFormSubmit() {  
   this.dataSaved = true;  
  
    
    this.node = this.nodeForm.value;

    this.nodeIdUpdate = this.node.nodeId;

    this.CreateNode(this.node);  
    this.nodeForm.reset();  
  }  
loadNodeToEdit(nodeId: string) {  
 
  this.nodeForm.controls['onlineTime'].enable();
 // this.nodeForm.controls['rnd'].enable();  
   this.nodeForm.controls['onlineTime'].enable();  
   this.nodeForm.controls['isOnline'].enable();  
   this.nodeForm.controls['uploadUtilization'].enable();  
   this.nodeForm.controls['downloadUtilization'].enable();  
   this.nodeForm.controls['errorRate'].enable();  
   this.nodeForm.controls['connectedClients'].enable(); 

 
  this.mySrv.getNodeById(nodeId).subscribe(node=> {  
      this.massage = null;  
      this.dataSaved = false;  
      this.nodeIdUpdate = node.nodeId;  
      this.nodeForm.controls['nodeId'].setValue(node.nodeId);  
     this.nodeForm.controls['city'].setValue(node.city);  
    // this.nodeForm.controls['rnd'].setValue(node.rnd);  
     this.nodeForm.controls['onlineTime'].setValue(node.onlineTime);  
     this.nodeForm.controls['isOnline'].setValue(node.isOnline);  
     this.nodeForm.controls['uploadUtilization'].setValue(node.uploadUtilization);  
     this.nodeForm.controls['downloadUtilization'].setValue(node.downloadUtilization);  
     this.nodeForm.controls['errorRate'].setValue(node.errorRate);  
     this.nodeForm.controls['connectedClients'].setValue(node.connectedClients); 

    }); 
      this.EditEnabled=true;
  }  

EditNode(){
    this.node=this.nodeForm.value;
    this.mySrv.updateNode(this.node).subscribe(() => {
      this.dataSaved = true;
      this.massage = 'Record Updated Successfully';
      this.loadAllNodes();
      this.nodeForm.reset();
      this.EditEnabled=false;
    
  });  

  }


  CreateNode(node:Node) {  
     
      this.mySrv.addNode(node).subscribe(  
        () => {  
          this.dataSaved = true;  
          this.massage = 'Record saved Successfully';  
          this.loadAllNodes();  
          this.nodeIdUpdate = null;  
          this.nodeForm.reset();  
        })  
      }
    
     
  deleteNode(nodeId: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.mySrv.removeNodeById(nodeId).subscribe(() => {  
      this.dataSaved = true;  
      this.massage = 'Record Deleted Succefully';  
      this.loadAllNodes();  
      this.nodeIdUpdate = null;  
      this.nodeForm.reset();  
  
    });  
  }  
  }  
  resetForm() {  
    this.nodeForm.reset();  
    this.massage = null;  
    this.dataSaved = false;  
  }  
}  