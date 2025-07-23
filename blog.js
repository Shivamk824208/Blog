
document.addEventListener('DomcontentLoaded', function () {
    const buttons = document.querySelectorAll('.read-more');

    buttons.forEach((btn) => {
        btn.addEventListener('Click', function(){
            const para = this.previousElementssibling;

            if(para.ClassList.contains('expanded')){
                para.innerText = para.dataset.short;
                para.ClassList.remove('expanded');
                this.innerText = 'Read More';
            }else{
                para.innerText = para.dataset.full;
                para.ClassList.add('expanded');
                this.innerText = 'Show Less';
            }
        });
    });
});