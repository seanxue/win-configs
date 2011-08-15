; hotkeys ref: http://www.autohotkey.com/docs/Hotkeys.htm

; Symbol  Description
; #       Win (Windows logo key)
; !       alt
; ^       ctl
; +       shift
; &       used between any two keys or mouse buttons to combine them into a custom hotkey
; <       Use the left key of the pair, like left alt
; >       Use the right key of the pair
; <^>!    AltGr (alternate graving), some keyboard
; *       Wildcard: Fire the hotkey even if extra modifiers are being held down.
; ~       When the hotkey fires, its key's native function will not be blocked (hidden from the system)
; $       
; up       the hotkey to fire upon release of the key rather than when the key is pressed down

; global switches and variables
#NoTrayIcon
;#NoEnv
#SingleInstance force
SetTitleMatchMode RegEx

;HOME := "e:\sean"

; includes
#include %A_ScriptDir%\tf.ahk
;#include %A_ScriptDir%\hidewnd.ahk

#z::Run www.autohotkey.com
#+r::Reload ; reload this script
#+e::Edit ; opens the script for editing

#i::Run www.google.com
#`::Run ~
#w::Run wiz
#g::Run gmail
#m::Run gmusic

#o::Run o.cmd
#+c::Run o.cmd c
^!t::Run go.cmd
^!+t::Run go.cmd lh

; !F2::Run rundll32.exe shell32.dll,#61 ;how come this one doesn't work
!F2::Send #r

#n::Run Notepad

#c::Run cmd /k cd /d %HOME%
; Stuff to do when Windows Explorer is open
#IfWinActive ahk_class ExploreWClass|CabinetWClass
  ; create new text folder
  #f::Send !fwf

  ; create new text file
  #t::CreateNewTextFile()

  ; open 'cmd' in the current directory
  #c::OpenCmdInCurrent()
return

GetFullPathFromAddressBar()
{
  ; This is required to get the full path of the file from the address bar
  WinGetText, full_path, A

  ; Split on newline (`n)
  StringSplit, word_array, full_path, `n
  ; Take the first element from the array
  full_path = %word_array1%   

  ; strip to bare address
  full_path := RegExReplace(full_path, "^Address: ", "")

  ; Just in case - remove all carriage returns (`r)
  StringReplace, full_path, full_path, `r, , all
  
  return full_path
}

; Opens the command shell 'cmd' in the directory browsed in Explorer.
; Note: expecting to be run when the active window is Explorer.
OpenCmdInCurrent()
{
  full_path := GetFullPathFromAddressBar()
  
  IfInString full_path, \
  {
    Run cmd /k cd /d "%full_path%"
  } else {
    Run cmd /k cd /d "%HOME%"
  }
}

CreateNewTextFile()
{
  name_prefix := "new-text-file"
  full_path := GetFullPathFromAddressBar()
  
  IfNotExist, %full_path%\%name_prefix%.txt
  {
    FileAppend, , %full_path%\%name_prefix%.txt
    Send {F5} ; refresh and go to the end
    ; TODO: select the new file and send F2 for renaming
    return
  }
  
  loop, 30
  {
    IfNotExist, %full_path%\%name_prefix%-%a_index%.txt
    {
      FileAppend, , %full_path%\%name_prefix%-%a_index%.txt
      Send {F5}
      ; TODO: select the new file and send F2 for renaming
      Return
    }
  }
}
