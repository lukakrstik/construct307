import {inject, Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc
} from "@angular/fire/firestore";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Project} from "./project";
import {Floorplan} from "./floorplan";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: Firestore) {
  }

  async getData() {
    return (
      await getDocs(query(collection(this.db, 'projects')))
    ).docs.map((projects) => projects.data());
  }
  async getProject(id : string) {
      return (await getDoc(doc(this.db, "projects", id))).data();
  }

  async pushProject(p: Project){
    const floorplans = p.floorplan.map((obj) => {return Object.assign({}, obj)})
    let docData = {
      name: p.name,
      address: p.address,
      desc: p.desc,
      photo: p.photo,
      id: p.id,
      noApartments: p.noApartments,
      floors: p.floors,
      svgPaths: p.svgPaths,
      floorplan: floorplans
    }
    console.log(docData, docData.floorplan)
    await setDoc(doc(this.db, "projects",p.id), docData).catch(error => console.log(error));
  }

  async deleteProject(id : string){
    await deleteDoc(doc(this.db, "projects", id));
  }

  async updateProject(p: Project){
    const floorplans = p.floorplan.map((obj) => {return Object.assign({}, obj)})
    let docData = {
      name: p.name,
      address: p.address,
      desc: p.desc,
      photo: p.photo,
      id: p.id,
      noApartments: p.noApartments,
      floors: p.floors,
      svgPaths: p.svgPaths,
      floorplan: floorplans
    }
    console.log(docData, docData.floorplan)
    await updateDoc(doc(this.db, "projects",p.id), docData).catch(error => console.log(error));
  }
}
