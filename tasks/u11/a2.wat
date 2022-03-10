(module
  (type $t0 (func))
  (type $t1 (func (param i32) (result i32)))
  (func $__wasm_call_ctors (type $t0))
  (func $isPrim (export "isPrim") (type $t1) (param $p0 i32) (result i32)
    (local $l0 i32) (local $l1 i32) (local $l2 i32)
    get_local $p0
    i32.const 2
    i32.div_s
    set_local $l0
    i32.const 1
    set_local $l1
    block $B0
      block $B1
        get_local $p0
        i32.const 4
        i32.lt_s
        br_if $B1
        i32.const 1
        set_local $l2
        loop $L2
          get_local $p0
          get_local $l2
          i32.const 1
          i32.add
          i32.rem_s
          i32.eqz
          br_if $B0
          i32.const 1
          set_local $l1
          get_local $l2
          i32.const 1
          i32.add
          tee_local $l2
          get_local $l0
          i32.lt_s
          br_if $L2
        end
      end
      get_local $l1
      return
    end
    i32.const 0)
  (table $T0 1 1 anyfunc)
  (memory $memory (export "memory") 2)
  (global $g0 (mut i32) (i32.const 66560))
  (global $__heap_base (export "__heap_base") i32 (i32.const 66560))
  (global $__data_end (export "__data_end") i32 (i32.const 1024)))
