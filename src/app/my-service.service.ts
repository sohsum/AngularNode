import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Node} from './node/NodeModel';
  
 @Injectable({  
  providedIn: 'root'  
})  
  
export class myService {  
  url = 'https://localhost:44365/api/nodes';  
  constructor(private http: HttpClient) { }  
  getAllNodes(): Observable<Node[]> {  
  return  this.http.get<Node[]>(this.url + '/AllNodes');
  }  
  getNodeById(nodeId: string): Observable<Node> {  
    return this.http.get<Node>(this.url + '/GetNodeById?id=' +nodeId);  
  }  
  addNode(node:Node): Observable<Node> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Node>(this.url + '/AddNode?id='+node.nodeId+'&city='+node.city, httpOptions);  
  }  
  updateNode(node: Node) {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<Node>(this.url + '/UpdateNode?id='+ node.nodeId+'&city='+node.city+'&onlineTime='+node.onlineTime+'&isOnline='+node.isOnline+'&uploadUtilization='+node.uploadUtilization+'&downloadUtilization='+node.downloadUtilization+'&errorRate='+node.errorRate+'&connectedClients='+node.connectedClients, httpOptions);
  }  



  removeNodeById(nodeId: string): Observable<number> {   
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<any>(this.url + '/RemoveNode?id=' +nodeId,  
 httpOptions);  
  }  
}  