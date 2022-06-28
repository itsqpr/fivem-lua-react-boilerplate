AddEventHandler('onResourceStart', function(resourceName)
	if GetCurrentResourceName() ~= resourceName then return end
	print("Boilerplate started")
end)

AddEventHandler('onResourceStop', function(resourceName)
	if GetCurrentResourceName() ~= resourceName then return end
	print("Boilerplate stopped")
end)
