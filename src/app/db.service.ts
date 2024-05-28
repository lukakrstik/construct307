import {inject, Injectable} from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs, query} from "@angular/fire/firestore";
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

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

}
