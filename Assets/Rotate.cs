using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class Rotate : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void SetRotation (string rotation);

    public void UseJS () {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
SetRotation (transform.rotation.ToString());
#endif
    }
    
    // Update is called once per frame
    public void Rotator(int val)
    {
        //if(Input.GetMouseButton(0))
        //{
            transform.rotation *= Quaternion.Euler(new Vector3(val, val, 0));
        //}
        
        //UseJS();
    }

    private void Update()
    {
        UseJS();
    }
}
