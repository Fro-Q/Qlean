unmap <Space>

imap jk <Esc>
imap JK <esc>

exmap toggleSideBar obcommand app:toggle-left-sidebar
nmap <Space>e :toggleSideBar<CR>

exmap toggleAuxiliaryBar obcommand app:toggle-right-sidebar
nmap <Space>a :toggleAuxiliaryBar<CR>

exmap toggleFold obcommand editor:toggle-fold
nmap za :toggleFold<CR>
