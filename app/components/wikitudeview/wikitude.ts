import * as app from 'application';
import { ContentView } from 'ui/content-view';
declare var com : any;

export class WikitudeView extends ContentView {

    _inst : any = new com.wikitude.architect.ArchitectView(app.android.foregroundActivity);

    setLocation(lat: number, lng: number, acc: number) {
        this._inst.setLocation()
    }


}