var searchIndex = {};
searchIndex['piston'] = {"items":[[0,"","piston","A user friendly graphics engine."],[1,"GameWindowSDL2","","A widow implemented by SDL2 back-end."],[11,"window","","",0],[11,"context","","",0],[11,"settings","","",0],[11,"should_close","","",0],[11,"last_pressed_key","","",0],[1,"GameWindowGLFW","","Contains stuff for game window."],[11,"window","","The window.",1],[11,"events","","Receives events from window.",1],[11,"glfw","","GLFW context.",1],[11,"settings","","Game window settings.",1],[11,"event_queue","","",1],[1,"GameWindowSettings","","Settings for window behavior."],[11,"title","","Title of the window.",2],[11,"size","","The size of the window",2],[11,"fullscreen","","If true, the window is fullscreen.",2],[11,"exit_on_esc","","If true, exit when pressing Esc.",2],[11,"background_color","","The background color.",2],[1,"Gl","","OpenGL back-end for Rust-Graphics."],[11,"gl_data","","",3],[11,"asset_store","","",3],[1,"GlData","","Contains OpenGL data."],[11,"tri_list_xy_rgba","","",4],[11,"tri_list_xy_rgba_uv","","",4],[11,"position_id","","",4],[11,"fill_color_id","","",4],[11,"tex_coord_id","","",4],[11,"current_program","","",4],[1,"AssetStore","","A place to store sounds, textures, animations etc."],[11,"assets_folder","","",5],[11,"textures","","",5],[11,"texture_files","","",5],[0,"shader_utils","","Helper functions for dealing with shaders."],[3,"compile_shader","piston::shader_utils","Compiles a vertex shader from file and fails if not succeeding.\nReads a shader file and creates data required to compile.\nCompiles a shader.\nReturns a shader or a message with the error."],[0,"game_window","piston","A trait for window operations."],[6,"GameWindow","piston::game_window","Implemented by window back-end."],[9,"new","","Creates a window.",6],[9,"get_settings","","Get the window's settings.",6],[9,"should_close","","Returns ture if the window should close.",6],[10,"get_size","","Get the window's size",6],[10,"swap_buffers","","If window support double buffers, called this to tell implementation\nswap buffers.",6],[10,"poll_event","","Poll a event from window's event queue.",6],[0,"keyboard","piston","Back-end agnostic keyboard keys."],[2,"Key","piston::keyboard","Represent a keyboard key."],[12,"Unknown","","",7],[12,"Backspace","","",7],[12,"Tab","","",7],[12,"Return","","",7],[12,"Escape","","",7],[12,"Space","","",7],[12,"Exclaim","","",7],[12,"Quotedbl","","",7],[12,"Hash","","",7],[12,"Dollar","","",7],[12,"Percent","","",7],[12,"Ampersand","","",7],[12,"Quote","","",7],[12,"LeftParen","","",7],[12,"RightParen","","",7],[12,"Asterisk","","",7],[12,"Plus","","",7],[12,"Comma","","",7],[12,"Minus","","",7],[12,"Period","","",7],[12,"Slash","","",7],[12,"D0","","",7],[12,"D1","","",7],[12,"D2","","",7],[12,"D3","","",7],[12,"D4","","",7],[12,"D5","","",7],[12,"D6","","",7],[12,"D7","","",7],[12,"D8","","",7],[12,"D9","","",7],[12,"Colon","","",7],[12,"Semicolon","","",7],[12,"Less","","",7],[12,"Equals","","",7],[12,"Greater","","",7],[12,"Question","","",7],[12,"At","","",7],[12,"LeftBracket","","",7],[12,"Backslash","","",7],[12,"RightBracket","","",7],[12,"Caret","","",7],[12,"Underscore","","",7],[12,"Backquote","","",7],[12,"A","","",7],[12,"B","","",7],[12,"C","","",7],[12,"D","","",7],[12,"E","","",7],[12,"F","","",7],[12,"G","","",7],[12,"H","","",7],[12,"I","","",7],[12,"J","","",7],[12,"K","","",7],[12,"L","","",7],[12,"M","","",7],[12,"N","","",7],[12,"O","","",7],[12,"P","","",7],[12,"Q","","",7],[12,"R","","",7],[12,"S","","",7],[12,"T","","",7],[12,"U","","",7],[12,"V","","",7],[12,"W","","",7],[12,"X","","",7],[12,"Y","","",7],[12,"Z","","",7],[12,"Delete","","",7],[12,"CapsLock","","",7],[12,"F1","","",7],[12,"F2","","",7],[12,"F3","","",7],[12,"F4","","",7],[12,"F5","","",7],[12,"F6","","",7],[12,"F7","","",7],[12,"F8","","",7],[12,"F9","","",7],[12,"F10","","",7],[12,"F11","","",7],[12,"F12","","",7],[12,"PrintScreen","","",7],[12,"ScrollLock","","",7],[12,"Pause","","",7],[12,"Insert","","",7],[12,"Home","","",7],[12,"PageUp","","",7],[12,"End","","",7],[12,"PageDown","","",7],[12,"Right","","",7],[12,"Left","","",7],[12,"Down","","",7],[12,"Up","","",7],[12,"NumLockClear","","",7],[12,"NumPadDivide","","",7],[12,"NumPadMultiply","","",7],[12,"NumPadMinus","","",7],[12,"NumPadPlus","","",7],[12,"NumPadEnter","","",7],[12,"NumPad1","","",7],[12,"NumPad2","","",7],[12,"NumPad3","","",7],[12,"NumPad4","","",7],[12,"NumPad5","","",7],[12,"NumPad6","","",7],[12,"NumPad7","","",7],[12,"NumPad8","","",7],[12,"NumPad9","","",7],[12,"NumPad0","","",7],[12,"NumPadPeriod","","",7],[12,"Application","","",7],[12,"Power","","",7],[12,"NumPadEquals","","",7],[12,"F13","","",7],[12,"F14","","",7],[12,"F15","","",7],[12,"F16","","",7],[12,"F17","","",7],[12,"F18","","",7],[12,"F19","","",7],[12,"F20","","",7],[12,"F21","","",7],[12,"F22","","",7],[12,"F23","","",7],[12,"F24","","",7],[12,"Execute","","",7],[12,"Help","","",7],[12,"Menu","","",7],[12,"Select","","",7],[12,"Stop","","",7],[12,"Again","","",7],[12,"Undo","","",7],[12,"Cut","","",7],[12,"Copy","","",7],[12,"Paste","","",7],[12,"Find","","",7],[12,"Mute","","",7],[12,"VolumeUp","","",7],[12,"VolumeDown","","",7],[12,"NumPadComma","","",7],[12,"NumPadEqualsAS400","","",7],[12,"AltErase","","",7],[12,"Sysreq","","",7],[12,"Cancel","","",7],[12,"Clear","","",7],[12,"Prior","","",7],[12,"Return2","","",7],[12,"Separator","","",7],[12,"Out","","",7],[12,"Oper","","",7],[12,"ClearAgain","","",7],[12,"CrSel","","",7],[12,"ExSel","","",7],[12,"NumPad00","","",7],[12,"NumPad000","","",7],[12,"ThousandsSeparator","","",7],[12,"DecimalSeparator","","",7],[12,"CurrencyUnit","","",7],[12,"CurrencySubUnit","","",7],[12,"NumPadLeftParen","","",7],[12,"NumPadRightParen","","",7],[12,"NumPadLeftBrace","","",7],[12,"NumPadRightBrace","","",7],[12,"NumPadTab","","",7],[12,"NumPadBackspace","","",7],[12,"NumPadA","","",7],[12,"NumPadB","","",7],[12,"NumPadC","","",7],[12,"NumPadD","","",7],[12,"NumPadE","","",7],[12,"NumPadF","","",7],[12,"NumPadXor","","",7],[12,"NumPadPower","","",7],[12,"NumPadPercent","","",7],[12,"NumPadLess","","",7],[12,"NumPadGreater","","",7],[12,"NumPadAmpersand","","",7],[12,"NumPadDblAmpersand","","",7],[12,"NumPadVerticalBar","","",7],[12,"NumPadDblVerticalBar","","",7],[12,"NumPadColon","","",7],[12,"NumPadHash","","",7],[12,"NumPadSpace","","",7],[12,"NumPadAt","","",7],[12,"NumPadExclam","","",7],[12,"NumPadMemStore","","",7],[12,"NumPadMemRecall","","",7],[12,"NumPadMemClear","","",7],[12,"NumPadMemAdd","","",7],[12,"NumPadMemSubtract","","",7],[12,"NumPadMemMultiply","","",7],[12,"NumPadMemDivide","","",7],[12,"NumPadPlusMinus","","",7],[12,"NumPadCear","","",7],[12,"NumPadClearEntry","","",7],[12,"NumPadBinary","","",7],[12,"NumPadOctal","","",7],[12,"NumPadDecimal","","",7],[12,"NumPadHexadecimal","","",7],[12,"LCtrl","","",7],[12,"LShift","","",7],[12,"LAlt","","",7],[12,"LGui","","",7],[12,"RCtrl","","",7],[12,"RShift","","",7],[12,"RAlt","","",7],[12,"RGui","","",7],[12,"Mode","","",7],[12,"AudioNext","","",7],[12,"AudioPrev","","",7],[12,"AudioStop","","",7],[12,"AudioPlay","","",7],[12,"AudioMute","","",7],[12,"MediaSelect","","",7],[12,"Www","","",7],[12,"Mail","","",7],[12,"Calculator","","",7],[12,"Computer","","",7],[12,"AcSearch","","",7],[12,"AcHome","","",7],[12,"AcBack","","",7],[12,"AcForward","","",7],[12,"AcStop","","",7],[12,"AcRefresh","","",7],[12,"AcBookmarks","","",7],[12,"BrightnessDown","","",7],[12,"BrightnessUp","","",7],[12,"DisplaySwitch","","",7],[12,"KbdIllumToggle","","",7],[12,"KbdIllumDown","","",7],[12,"KbdIllumUp","","",7],[12,"Eject","","",7],[12,"Sleep","","",7],[10,"fmt","","",7],[10,"eq","","",7],[10,"ne","","",7],[10,"code","","Returns an id of the key",7],[10,"hash","","",7],[10,"to_i64","","",7],[10,"to_u64","","",7],[10,"to_int","","",7],[10,"from_u64","","",7],[10,"from_i64","","",7],[10,"from_int","","",7],[0,"event","piston","Event data."],[2,"Event","piston::event","Contains the information associated with an event."],[12,"NoEvent","","No event occured.",8],[12,"KeyReleased","","A key was released.",8],[12,"KeyPressed","","A key was pressed.",8],[12,"MouseButtonPressed","","A mouse button was pressed.",8],[12,"MouseButtonReleased","","A mouse button was released.",8],[12,"MouseMoved","","The mouse moved.",8],[0,"mouse","piston","Back-end agnostic mouse buttons."],[2,"Button","piston::mouse","Represent a mouse button."],[12,"Unknown","","Unknown mouse button.",9],[12,"Left","","Left mouse button.",9],[12,"Right","","Right mouse button.",9],[12,"Middle","","Middle mouse button.",9],[12,"X1","","Extra mouse button number 1.",9],[12,"X2","","Extra mouse button number 2.",9],[12,"Button6","","Mouse button number 6.",9],[12,"Button7","","Mouse button number 7.",9],[12,"Button8","","Mouse button number 8.",9],[10,"fmt","","",9],[10,"eq","","",9],[10,"ne","","",9],[6,"Game","piston","Implemented by game applications."],[10,"render","","Render graphics.",10],[10,"update","","Update the physical state of the game.",10],[10,"load","","Perform tasks for loading before showing anything.",10],[10,"key_press","","User pressed a key.",10],[10,"key_release","","User released a key.",10],[10,"mouse_press","","Pressed a mouse button.",10],[10,"mouse_release","","Released a mouse button.",10],[10,"mouse_move","","Moved mouse cursor.",10],[10,"mouse_relative_move","","Moved mouse relative, not bounded by cursor.",10],[10,"viewport","","Sets up viewport.",10],[10,"should_close","","Whether the window should be closed.",10],[10,"swap_buffers","","Swaps the front buffer with the back buffer.",10],[10,"handle_events","","Handles events using current game window settings.",10],[10,"run","","Executes a game loop.",10]],"paths":[[1,"GameWindowSDL2"],[1,"GameWindowGLFW"],[1,"GameWindowSettings"],[1,"Gl"],[1,"GlData"],[1,"AssetStore"],[6,"GameWindow"],[2,"Key"],[2,"Event"],[2,"Button"],[6,"Game"]]};
initSearch(searchIndex);
