(module
  (func $ggt (param $x i32) (param $y i32) (result i32)
    get_local $x
    i32.eqz
    if
      get_local $y
      return
    end
    loop $loopMarker
      get_local $y
      i32.const 0
      i32.ne
      if
        get_local $x
        get_local $y
        i32.gt_s
        if
          get_local $x
          get_local $y
          i32.sub
          set_local $x
		  br $loopMarker
        end
          get_local $y
          get_local $x
          i32.sub
          set_local $y
        br $loopMarker
      end
    end
    get_local $x
  )
  (export "ggt" (func $ggt))
)