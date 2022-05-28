local function debugPrint(msg)
	if cfg.general.debug then -- set 'false' in `nui/config.json` to disable all `debugPrint`.
		print(msg)
	end
end

RegisterCommand('show:nui', function()
	SendNUIMessage({
    app = "your-resource",
	  method = "setVisible",
	  data = true
  })
  SetNuiFocus(true, true)
  debugPrint('NUI Opened')
end)

-- Alternative in-game command. When will you use this? I don't know, but I used it *shrug*.
if cfg.general.command then
	RegisterCommand('hide:nui', function()
		SetNuiFocus(false, false)
		debugPrint('NUI Closed')
	end)
end
