import { Md5 } from "ts-md5";

class CObject
{
    public GetHashCode():string
    {
        return Md5.hashStr(this.ToString()).toString();
    }

    public Equals(other:CObject): boolean
    {
        return this === other;
    }

    public ToString():string
    {
        return JSON.stringify(this);
    }
}

export default CObject;