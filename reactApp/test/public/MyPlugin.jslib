
mergeInto(LibraryManager.library, {
  SetRotation: function (rot) {
    dispatchReactUnityEvent("SetRotation", Pointer_stringify(rot));
  },
});