import { Parcel } from "single-spa-react/parcel";
import { Button } from "@rxjs-temp/shared-UI-library";
import { mountRootParcel } from "single-spa";

function UseParcelComponent(props) {
  // The parcelConfig could be implemented in Angular, Vue, or anything else,
  // but it works inside of a React component!
  return (
    <div>
      Lets render a parcel with jsx!
      <Button />
    </div>
  );
}

export default UseParcelComponent;
