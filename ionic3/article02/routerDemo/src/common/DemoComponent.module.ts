import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppItem } from '../components/appItem/AppItem';
import { DownloadBtn } from '../components/downloadBtn/DownloadBtn';
import { ArticleItem } from '../components/articleItem/articleItem';
import { UserArticle } from '../components/userArticle/userArticle';

@NgModule({
    declarations:[
        AppItem,
        DownloadBtn,
        ArticleItem,
        UserArticle
    ],
    imports:[CommonModule],
    entryComponents:[
    ],
    exports:[
        AppItem,
        DownloadBtn,
        ArticleItem,
        UserArticle
    ]
})
export class DemoComponent {}
