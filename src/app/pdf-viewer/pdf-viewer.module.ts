/**
 * Created by vadimdez on 01/11/2016.
 */
import { NgModule } from '@angular/core'

import { PdfViewerComponent } from './pdf-viewer.component'
import { PagerComponent } from './pager/pager.component'
import { AngularResizedEventModule } from 'angular-resize-event'
import { PDFJSStatic } from 'pdfjs-dist'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { OverlayModule } from '@angular/cdk/overlay'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { IconService } from './services/icon.service'

declare global {
  const PDFJS: PDFJSStatic
}

export {
  PDFJSStatic,
  PDFDocumentProxy,
  PDFViewerParams,
  PDFPageProxy,
  PDFSource,
  PDFProgressData,
  PDFPromise,
} from 'pdfjs-dist'

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    OverlayModule,
    MatProgressSpinnerModule,
    AngularResizedEventModule,
  ],
  declarations: [PdfViewerComponent, PagerComponent],
  exports: [PdfViewerComponent],
  providers: [IconService],
})
export class PdfViewerModule {}
