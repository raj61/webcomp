from django.shortcuts import render
from django.core.files.base import ContentFile
from django.core.files.storage import Storage,FileSystemStorage
import subprocess
# Create your views here.

def home(request):
    if request.method == 'POST':
        code = request.POST['code']
        input1 = request.POST['input']
        f1 = ContentFile(code)
        inputf = ContentFile(input1)
        fileStorage = FileSystemStorage()
        f2 = fileStorage.save("code1.cpp",f1)
        input2 = fileStorage.save("in",inputf)
        p = subprocess.Popen(['g++ media/'+f2+'&& ./a.out <media/'+input2], shell=True, bufsize=0, stdout=subprocess.PIPE,stderr=subprocess.PIPE, universal_newlines=True)
        p.wait()
        output = p.stdout.read()
        error = p.stderr.read()
        p.stderr.close()
        p.stdout.close()
        # print(subprocess.Popen(['g++ media/'+f2],shell=True))
        # try:
        #     outs, errs = proc.communicate(timeout=15)
        # except :
        #     proc.kill()
        #     outs, errs = proc.communicate()
        # if outs:
        #     print(outs)
        # if errs:
        #     print(errs)
        # outs, errs = proc.communicate()
        # if outs:
        #     print(outs)
        # if errs:
        #     print(str(errs))
        context = {
        'code':code,
        'input':input1,
        'log':[],
        'success':1,
        }

        if error:
            context['success'] = 0;
            context['log'].append("Compilation Failed.")
            for line in error.split('\n'):
                if line != '^':
                    context['log'].append(line.strip('media/'))
        else:
            context['log'].append("Succesfully compiled. ")
            context['log'].append(str(output))
        return render(request,"home.html",context)
 
    return render(request,"home.html",{})
